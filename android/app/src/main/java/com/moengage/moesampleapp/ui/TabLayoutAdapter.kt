package com.moengage.moesampleapp.ui

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.FragmentPagerAdapter

class TabLayoutAdapter(
    fragmentManager: FragmentManager,
    private var mTotalTabs: Int
) : FragmentPagerAdapter(fragmentManager, BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT) {

    override fun getCount(): Int = mTotalTabs

    override fun getItem(position: Int): Fragment {
        return when (position) {
            0 -> NativeFragment()
            1 -> HomeTabLayout()
            else -> throw Exception("Invalid Fragment Index")
        }
    }
}