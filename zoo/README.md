Documentation for puttin ar into this app
https://developers.augment.com/react-native-sdk#a-working-example

I am trying to get the metadata to be in the android/app/src/main/AndroidManifest.xml
to get the configuration started but the build is failing 

<meta-data
    android:name="@string/augment_sdk_app_id"
    android:value="357fee36746668573ceb2f5957c4869ee1a62a112639bac9b0fae43c7c431692" />
<meta-data
    android:name="@string/augment_sdk_app_client"
    android:value="80ae1420e164e0440d5329067bcdd953e9fa6c63b75c001c06d169a4f11268c5" />


I was able to edit the android/app/build.gradle file correctly.