#!/bin/bash

adb connect 192.168.1.128
adb push channels_movistar_kodi_2026.m3u8 /sdcard
adb push gycachannels.m3u /sdcard
