package com.check;

import android.app.Application;
import com.tanguyantoine.react.MusicControl;
import com.facebook.react.ReactApplication;
import guichaguri.trackplayer.TrackPlayer;
import com.audioStreaming.ReactNativeAudioStreamingPackage;
import com.remobile.audio.RCTAudioPackage;
import fm.indiecast.rnaudiostreamer.RNAudioStreamerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.zmxv.RNSound.RNSoundPackage;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new TrackPlayer(),
            new ReactNativeAudioStreamingPackage(),
            new RCTAudioPackage(),
            new RNAudioStreamerPackage(),
          new RNSoundPackage() ,
          new MusicControl()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
