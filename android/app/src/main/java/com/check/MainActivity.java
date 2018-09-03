package com.check;

import com.facebook.react.ReactActivity;

import com.zmxv.RNSound.RNSoundPackage; // <-- New
public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

    @Override
  protected void onCreate(Bundle savedInstanceState){

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
    
      .addPackage(new MainReactPackage())
      .addPackage(new RNSoundPackage());
  }
}