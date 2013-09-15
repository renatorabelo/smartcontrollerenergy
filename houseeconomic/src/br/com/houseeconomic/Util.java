package br.com.houseeconomic;

import android.net.ConnectivityManager;
import android.content.Context;

public class Util {

    private static Context AppContext;

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
