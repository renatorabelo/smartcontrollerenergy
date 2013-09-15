package br.com.houseeconomic;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.net.ConnectivityManager;
import android.os.Bundle;
import android.view.*;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;


public class HouseActivity extends Activity {
    /**
     * Called when the activity is first created.
     */
    private final Context context = this;
    private WebView webView;
    private ProgressDialog moduleLoading = null;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.main);
        Util.setAppContext(getApplicationContext());
        if(!Util.verifyConnection()) {
            Toast.makeText(this, "Não foi possível estabelecer conexão com o servidor.", Toast.LENGTH_LONG).show();
            finish();
        } else {
            this.webView = (WebView)findViewById(R.id.webView);
            this.webView.getSettings().setCacheMode(WebSettings.LOAD_DEFAULT);
            this.webView.getSettings().setJavaScriptEnabled(true);
            this.webView.getSettings().setSavePassword(false);
            this.webView.setVerticalScrollBarEnabled(false);
            this.webView.setHorizontalScrollBarEnabled(false);
            this.webView.addJavascriptInterface(new JavaScriptInterface(this), "Mobile");
            this.webView.setWebViewClient(new WebViewClient() {
                @Override
                public boolean shouldOverrideUrlLoading(WebView view, String url)
                {
                    view.loadUrl(url);
                    return true;
                }
                @Override
                public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                    Toast.makeText(context, description, Toast.LENGTH_LONG).show();
                }
                public void onLoadResource (WebView view, String url) {
                    if (moduleLoading == null) {
                        moduleLoading = new ProgressDialog(context);
                        moduleLoading.setIndeterminate(true);
                        moduleLoading.setCancelable(false);
                        moduleLoading.setMessage("Loading...");
                        moduleLoading.show();
                    }
                }

                public void onPageFinished(WebView view, String url) {
                    if (moduleLoading.isShowing()) {
                        moduleLoading.dismiss();
                    }
                }
            });
            this.webView.loadUrl("http://economichouse.orgfree.com");
            //this.webView.loadUrl("http://192.168.1.2/smartcontrollerenergy/");
            //this.webView.loadUrl("http://houseeconomic.p.ht/");
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater menuInflater = getMenuInflater();
        menuInflater.inflate(R.menu.menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem Item) {
        switch (Item.getItemId()) {
            case R.id.settings:
                Toast.makeText(context, "teste", Toast.LENGTH_LONG).show();
                return true;
            default:
                return super.onOptionsItemSelected(Item);
        }
    }


    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event)
    {
        if ((keyCode == KeyEvent.KEYCODE_BACK) && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
    public class JavaScriptInterface {
        Context mContext;

        JavaScriptInterface(Context c) {
            mContext = c;
        }
        public void showLoading() {
            moduleLoading.show();
        }
        public void removeLoading() {
            if (moduleLoading.isShowing()) {
                moduleLoading.dismiss();
            }
        }
    }
}

