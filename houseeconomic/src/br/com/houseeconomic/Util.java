package br.com.houseeconomic;

import android.net.ConnectivityManager;
import android.content.Context;

public class Util {

    private static Context AppContext;
    private static String URL = "http://economichouse.orgfree.com";
//    private static String URL = "http://192.168.1.2/smartcontrollerenergy";

    public static String getURL() {
        return URL;
    }

    public static void setURL(String URL) {
        Util.URL = URL;
    }

    public static Context getAppContext() {
        return AppContext;
    }
    public static void setAppContext(Context appContext) {
        AppContext = appContext;
    }

    public static boolean verifyConnection() {
        ConnectivityManager conectivtyManager = (ConnectivityManager)getAppContext().getSystemService(Context.CONNECTIVITY_SERVICE);
        return (conectivtyManager.getActiveNetworkInfo() != null
                && conectivtyManager.getActiveNetworkInfo().isAvailable()
                && conectivtyManager.getActiveNetworkInfo().isConnected());
    }
}
