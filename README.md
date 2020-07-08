# FoundryVTT - Forien's Scene Navigator
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/forien/foundryvtt-forien-scene-navigator?style=for-the-badge) 
![GitHub Releases](https://img.shields.io/github/downloads/Forien/foundryvtt-forien-scene-navigator/latest/total?style=for-the-badge) 
![GitHub All Releases](https://img.shields.io/github/downloads/Forien/foundryvtt-forien-scene-navigator/total?style=for-the-badge&label=Downloads+total)  
**[Compatibility]**: *FoundryVTT* 0.6.0+  
**[Systems]**: *any*  
**[Languages]**: *any*  

This module provides ability to create Scene Entity Links that when clicked Open or Activate a Scene.

## Installation

1. Install Forien's Scene Navigator using manifest URL: https://raw.githubusercontent.com/Forien/foundryvtt-forien-scene-navigator/master/module.json
2. While loaded in World, enable **_Forien's Scene Navigator_** module.

## Usage
Simply hold a key before you start dragging Scene from SceneSidebar and drag Scene into Journal (or any rich text editor like [Quest Log's](https://github.com/Forien/foundryvtt-forien-quest-log) description).
  
##### Supported Keys (Windows & Linux):
* Hold Control to create **Open Scene** link.
* Hold Alt to create **Activate Scene** link.

##### Supported Keys (macOS):
* Hold Command (`⌘`) to create **Open Scene** link. 
* Hold Alt to create **Activate Scene** link.

_On macOS you **need to release** key, before you drop link onto rich text editor!_  

#### Examples

![Links](https://i.gyazo.com/f09907d82946dd0afd209063a4f06221.png) ![Codes](https://i.gyazo.com/d25a8bc23bad1c42433585cdca176beb.png)

## Browser and OS compatibility

|            	| Chrome 	| Firefox 	| Electron 	|
|------------	|--------	|---------	|----------	|
| Windows 10 	| ✓      	| ✓       	| ✓        	|
| Ubuntu     	| ✓      	|        	| ✓        	|
| macOS      	|       	|         	| ✓        	|
* _Electron_ is browser used by Foundry VTT Application
* ✓ means tested and working
* ✗ means tested and not working
* blank means untested

## Future plans

* Currently none. Maybe refactor code when Foundry allows to properly declare custom Text Enrichments

*If you have **any** suggestion or idea on new contents, hit me up on Discord!*

## Translations

If you are interested in translating my module, simply make a new Pull Request with your changes, or contact me on Discord.

## Support

If you wish to support me, please consider [becoming my Patreon](https://www.patreon.com/forien) or donating [through Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6P2RRX7HVEMV2&source=url). Thanks!

## Acknowledgements

* Great thanks to Discord member Voldemalort for help with debugging module in macOS

## Contact

If you wish to contact me for any reason, reach me out on Discord using my tag: `Forien#2130`

## License

Forien's Scene Navigator is a module for Foundry VTT by Forien and is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

This work is licensed under Foundry Virtual Tabletop [EULA - Limited License Agreement for module development from May 29, 2020](https://foundryvtt.com/article/license/).
