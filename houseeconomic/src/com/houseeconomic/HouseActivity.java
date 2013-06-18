package com.houseeconomic;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.net.ConnectivityManager;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.view.Window;
import android.widget.Toast;

import java.io.File;


public class HouseActivity extends Activity {
    /**
     * Called when the activity is first created.
     */
    private WebView webView;
    final Context context = this;
    private ProgressDialog moduleLoading = null;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        this.webView = (WebView)findViewById(R.id.webView);
        if(!this.verificaConexao()) {
            Toast.makeText(this, "Não foi possível estabelecer conexão com o servidor.", Toast.LENGTH_LONG).show();
            this.finish();
        } else {
            this.webView.getSettings().setJavaScriptEnabled(true);
            this.webView.getSettings().setSavePassword(false);
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
                        moduleLoading.setCancelable(false);
                        moduleLoading.setMessage("Inicializando módulos..");
                        moduleLoading.show();
                        view.setEnabled(false);
                    }
                }

                public void onPageFinished(WebView view, String url) {
                    if (moduleLoading.isShowing()) {
                        moduleLoading.dismiss();
                        view.setEnabled(true);
                    }
                }
            });
            //this.webView.loadUrl("http://controllerenergy.xp3.biz");
            this.webView.loadUrl("http://192.168.1.2/smartcontrollerenergy/");
      //      this.webView.loadUrl("http://houseeconomic.p.ht/");
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

    public boolean verificaConexao() {
        ConnectivityManager conectivtyManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        return (conectivtyManager.getActiveNetworkInfo() != null
                && conectivtyManager.getActiveNetworkInfo().isAvailable()
                && conectivtyManager.getActiveNetworkInfo().isConnected());
    }
}
