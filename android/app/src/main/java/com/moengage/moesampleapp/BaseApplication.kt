package com.moengage.moesampleapp

import android.app.Application
import com.facebook.react.BuildConfig
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.moengage.core.DataCenter
import com.moengage.core.MoEngage
import com.moengage.core.config.FcmConfig


class BaseApplication : Application(), ReactApplication {

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)

        val moEngage = MoEngage.Builder(
            this,
            "YOUR_APP_ID",
            DataCenter.DATA_CENTER_1
        ).configureFcm(FcmConfig(false)).build()
        MoEngage.initialiseDefaultInstance(moEngage)
    }

    private val reactNativeHost =
        object : DefaultReactNativeHost(this) {

            override fun getUseDeveloperSupport() = BuildConfig.DEBUG

            override fun getPackages(): List<ReactPackage> {
                return PackageList(this).packages.toMutableList()
            }

            override fun getJSMainModuleName(): String = "index"
        }

    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost
}