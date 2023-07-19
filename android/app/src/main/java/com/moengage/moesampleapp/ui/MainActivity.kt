package com.moengage.moesampleapp.ui

import android.os.Bundle
import androidx.viewpager.widget.ViewPager
import com.facebook.react.ReactActivity
import com.google.android.material.tabs.TabLayout
import com.moengage.inapp.MoEInAppHelper
import com.moengage.moesampleapp.R

class MainActivity : ReactActivity() {

    private lateinit var tabLayout: TabLayout
    private lateinit var viewPager: ViewPager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        tabLayout = findViewById(R.id.tablayout)
        viewPager = findViewById(R.id.viewPager)

        tabLayout.addTab(tabLayout.newTab().setText("React"))
        tabLayout.addTab(tabLayout.newTab().setText("Android"))

        tabLayout.tabGravity = TabLayout.GRAVITY_FILL

        viewPager.adapter = TabLayoutAdapter(supportFragmentManager, tabLayout.tabCount)
        viewPager.addOnPageChangeListener(TabLayout.TabLayoutOnPageChangeListener(tabLayout))
        tabLayout.addOnTabSelectedListener(object : TabLayout.OnTabSelectedListener {
            override fun onTabSelected(tab: TabLayout.Tab) {
                viewPager.currentItem = tab.position
            }

            override fun onTabUnselected(tab: TabLayout.Tab) {}
            override fun onTabReselected(tab: TabLayout.Tab) {}
        })
    }

    override fun onStart() {
        super.onStart()
        MoEInAppHelper.getInstance().showInApp(this)
    }
}