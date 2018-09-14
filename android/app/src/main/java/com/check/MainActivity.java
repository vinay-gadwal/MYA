package com.check;

import com.facebook.react.ReactActivity;

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

    @Override
  protected void onCreate(Bundle savedInstanceState){

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
    
      .addPackage(new MainReactPackage());
  }
}