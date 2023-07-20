package com.moengage.moesampleapp.ui

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.facebook.react.ReactFragment
import com.moengage.moesampleapp.R

class NativeFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_native, container, false)
    }

    override fun onResume() {
        super.onResume()

        val reactFragment = ReactFragment.Builder()
            .setComponentName("MoESampleApp")
            .setFabricEnabled(false)
            .build()

        activity?.supportFragmentManager
            ?.beginTransaction()
            ?.add(R.id.reactFragmentHolder, reactFragment)
            ?.commit()
    }
}