'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"favicon.ico": "3e11c11f6b2d5dc3ec6c08162c3af288",
"index.html": "71299f454a9f43403ee6bfc05d9ecb46",
"/": "71299f454a9f43403ee6bfc05d9ecb46",
"main.dart.js": "64bf16d0244454ad2dba0b094f4ac2cb",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-chrome-192x192.png": "c08fb3a7fc54ee429f8688d90fcbb9bf",
"icons/apple-touch-icon.png": "7b79332d7d5a16ccabec021c69c3123e",
"icons/android-chrome-512x512.png": "e5fd1e277f9ea76ea0f59360550e490f",
"manifest.json": "f90918703be609ad7b4413ea9115c275",
".git/config": "7e9129009889692354b2234941c4b848",
".git/objects/0d/f9541d928fe56816bef56a4b6abfffd20d2863": "6c5f6f40e577eeb60ff9d4dfbd2da96d",
".git/objects/0d/68cdf50430807703a0009025050b2ba8a4a3d6": "a3fe8c9b3ac0ce2648a9c568d5b28e14",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/8a23c2c32c29dd7c7d464912345d3459e57c0c": "9941af6284404001101f76ad6d321156",
".git/objects/68/3a280b58f9bb6d2cf661c376a9a5300cf758a0": "b61a671733d8c1208a4b0657c0f56de0",
".git/objects/57/579592c00f4d413de55c0f5cf929550c6c64ce": "3ea5b7090a8ebcf2c105cf8fbb333159",
".git/objects/57/41891d80d733d4ee2aaae5731184296d372a22": "f03cb0fd9318d479fedc180534c53ccd",
".git/objects/57/f5fbc437daa5aace5c3573aa3d03c7bb316d5b": "6403941970fc2d7a89846e0c9eb4317f",
".git/objects/6f/438be585d9226e20be111d988309da340dfde8": "dd4ff1b94165d58f212875dfa958c895",
".git/objects/04/aa2fd31b3932b5365950b7b14411e37c4ae508": "70bb291441b1eba4eba912e9b3b1382f",
".git/objects/6a/578182613ad2b99e536c50608be8e7f7069185": "63e3282b7f4587c43dae5274d16c492d",
".git/objects/6a/d1a3a6a54bfe081f2f286ec202e7f6783cda65": "40e3812eb32a9f917eca197b07e1b4d7",
".git/objects/32/01de65b799d29088527f9fda173fa9b3b0cce5": "da47844631bb1872e8fbf1a07c6e4e0d",
".git/objects/32/5338203410a69d69c28e15360debe57fc6020a": "383d2d5ef39de36df32dfc4c1f28e43a",
".git/objects/69/862d317e9b87a58892416dce303644e2fba4d9": "3b1540127ab38c32c320a57ce4cea897",
".git/objects/3c/62bde3e22be07355281329d0f1f9c7620db17f": "8c8257c4e7c7a10b234211d25f2b448b",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/56/e32b3e53f91043bbe550fe9df7775b47ae1591": "47c7343f052031549c7d4109a90f21b3",
".git/objects/56/c43c1e6cb81bd2b73fcd3cef6578e357c6a84d": "0fc7bd6d9a25da462f965ee4d9d2c456",
".git/objects/51/e2b8ded8085e7a316e1258e6feff4e7febea09": "73ef01c72d14e428d5b202ffcf067485",
".git/objects/51/ce0ca084bd89cdde7f710825a566b1bdd2d479": "d1efa514a4c2b3fdfa5761d7b2e1aee4",
".git/objects/3d/9bf265c71144fab3253c408a0a4c9f150aaac0": "f2a5729f3d47a10f74b98ec14397c864",
".git/objects/58/9b2ecb7a4f6496ea7c322f5dbf3f0f933e7e5d": "9bca23db38e130e09d3fc1baecc4c31e",
".git/objects/67/877c098ab2f3535ef70413290f8df867b1a48a": "6ec3a939a933ee20aada8ea66f775cfd",
".git/objects/93/155ceccf4cd4909d75f3a8ef670f2277970888": "53d3d58944816c697b74909819b41d57",
".git/objects/93/82350537c3e8c9ada4bfcf59594aeeb5232dd1": "9459a97dbf61589bb17fb924d949c099",
".git/objects/94/a3a330adc1cc54587f24b50d03d6412441f68a": "c0e53dd807f0e06bf890cfaf6e07e275",
".git/objects/60/9c0ef43a178e2e52e28bff75e98cf5c4aca1b7": "76051dfaa8c730a2951a74d4042d9dac",
".git/objects/60/1c76b4c6ceda6e654773b479113133dc7442cb": "dcb3cbcb6a94c1862124b11eba7691c3",
".git/objects/a3/56ef66bb46d7174b87199f9de2a77551dc10b3": "b0af21537aacd764aa7e433abe2132ba",
".git/objects/ac/9d0036f29433102a6337390e7fa3be8fd703f7": "ed5111f55c53cda3db9ddac6194f9ae4",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/bb/93e624bb01c56c48934abdf46f38eb14c1364c": "8fe54bd41ac8b3879afda2bc22cd03ae",
".git/objects/bb/be77c68c24ce439e9a8dfa84d036b40aa4850c": "06fe24691e76b5cfd771dd810537a8d7",
".git/objects/b3/944327a1be53d16728e6cec241387035a2b2fc": "eaaa77da80968d807429a77f4de74b07",
".git/objects/df/db4a2a73dcf110b5a4ff48cf85053f85694acb": "82a678b9bf99765e2475981423182712",
".git/objects/a5/b012165e2914e403566f8d4ccfd1c89b99e668": "25ab21e46349180588735f2804a5938c",
".git/objects/a5/6fd7f8bdd44b910b0f429cfbab9c3061b99f82": "d840fb30fe50e3600222d76855a96a59",
".git/objects/bd/0921e0013e6263a27514540b40892826549afd": "ed3b9cdebedd41b27964a29a78eb30c4",
".git/objects/d1/55919a96526d1f2266da5320f4a88497e5142f": "fe20ac08acbcc8b173e0e7e139a345c7",
".git/objects/d1/93377aae6dbf03ce52861383d17a4ad683e8ca": "a9d6f0085f371d1afa35a7c1911003e6",
".git/objects/d6/bc4b5dca22d9a145c6d1b9b06e0134bd9a57a4": "6e243cd5bc3b6e1d1241a994da35b5c5",
".git/objects/d6/d41e31581eea9091825cfaf5a2b0fee15386d9": "d18613a12de2437d585ee283a900a5ce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0fae5e5be8ad3065507ae5756509c3518ba0ff": "eb29ce7bbcc2c79cfd6374c6c14e3033",
".git/objects/bc/9ff78446356e3c7b87d3f0accbe002181df10e": "5ffc56f139fed921fd6ce73e85c668b0",
".git/objects/ae/2ba75c2d156eff9e0f635e3e86113bad7ef06c": "5adb7a93f9216d71f34cb64afc10000f",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/d8/bed33cd7f00558ff7c006800d5e98090c4160b": "ce16b0e5fb4ea99507395b953514379a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e020a0ef37d1cc1dbd2b4698006c423386aea9": "a5945b53fa855941b4a7c67254d8b850",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/323975aca3e5aa8cfbb01c78f2d5b7a325fa06": "1afa10c216827b052f2f29e63a986d04",
".git/objects/f4/7dc57791eacf174539601f75b9980400ac2723": "775f66f765cf06aab5749fe50a673ea3",
".git/objects/f4/1ef2036a9d683a52da7d98df6d2e08c2245d02": "4842d8a58cc2694c941a8c25011eec35",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/76433055723d802e95c2d43a8848000ff12635": "3ba1e456fbba505973c336b5d297f07f",
".git/objects/c7/79b8fe5085492f2013c8ea34bcaa029960b898": "f6f264af411886131bad06afbb40ef1a",
".git/objects/fc/aecabeae8e509a2ae8d0ddbd01f5eda16cbbc9": "053a2e019968a768a232b9e7a4f06f9c",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/e3/fa9c65008ed6fedc2479045da17936ee4da649": "be354abd4b4e8816cbeb401305a99785",
".git/objects/cf/4a7516753d5ca478450749ab66e8e7d1a59b61": "e99cf92d960ec446dfbafbd8611ded48",
".git/objects/c8/e0c825e9939d227c2241c75d88368abbd184a5": "ab2ea018c8a24244b4cdc0b7348a4a1c",
".git/objects/c8/a8515ba67f0777de5dab2972bca2130496c7d2": "41c0f7619de6b486de60bff69514a3e0",
".git/objects/fb/dc0a3771f6a88eb81b9fa64c193158e88a0956": "0a86aca464d925ae2d2e9088052043f3",
".git/objects/ed/b5fc7508d73d9580550c065d46d50698f3f2ed": "199ce471fa16ddd7198c0b7a1c225a31",
".git/objects/c6/598928fb2972abefe12db73c08a487216e867a": "645904cb42496593a92d8bc9e2c3026f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/b0db74551132bcb74f2a84d5ac275615a4f30f": "6e271cfb8fa4b8802cf6697ab28b0091",
".git/objects/18/62328767cf0ede9a3d56bd664bae0fb9110e55": "913af0b06d99a2e5a113136575ab38e2",
".git/objects/27/a758c4d044020e1e07cab8908effdc52c0e68a": "3761cb499781cda2dfb622477b7119c8",
".git/objects/4b/19f6b8181134a5d444a5b16bf86af9f63ac2e6": "b3b633c2b2bb1b63f3332b9a9fe011db",
".git/objects/4b/cd6c9674ffa7422a0664a7833dcca4608178e1": "9df136ee62ab6ec90a300bc19731ca9d",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/7d/b029e9be556580bd89bff95a70c2632a73e9fd": "34f9627f0be85dce6f7e76d1ea0433b8",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/89/026ff96cb0c339c0cab648c1884cbfa5520d51": "bf054ffa273a3f838fedd84fda202d76",
".git/objects/1f/038185e25704b4926508c7381943452bc5d91a": "d7455152a9acd775ed08ae7d9cc52dcf",
".git/objects/1a/3985352d789601cfb2498ec9c3f4cafa17141e": "faa4fd7b8c46fed13aa88c9a760d6eec",
".git/objects/28/2c556ff59411419a8032c485eea48989b5c213": "3ce78f0832692dd998104927cb5bb7ac",
".git/objects/8a/1fbed476a645663947951dfa048df36dc7cb24": "6e05539a551fcb8d987e818d58abb705",
".git/objects/10/4b71f0586297b0a53855fc186fbf2de0e319f0": "e08c5842f3f37a55091f59b0f34085fb",
".git/objects/4c/3bcafa3f3ecd4bdcda2ba53fa75b4d744a8951": "e26aa8b4134ee76edfa9eb7b003ad23d",
".git/objects/4c/26729c930bd9dc2b5a1569412acbd982bffb72": "1a692abda32e1f13adf09f19ec823207",
".git/objects/26/efca7891feeef4d3d49d3355903fb38db57304": "5ba86d3a2946f05418ac258b8e6f517f",
".git/objects/4d/38738a00b9d510b38c397b224c8b16d73482eb": "11bd7af9cf01147ba8d8ca93cf6dc635",
".git/objects/86/d2d84882724d8fc645c374cb35a335b1568ff9": "36a2cd411502a3a27989944873061c50",
".git/objects/44/feb62e018128f45d752d0f19de4fac0ad929c7": "09065c93f838ca0f8f4e71c65f84e56f",
".git/objects/2a/4357933f5118587a1ce50a750344101a8f9d45": "02816803f6330d0fa36ae45c8c2a7ed2",
".git/objects/88/88c728d05d28521744343a3e54b4ec7e69960e": "ca7740ff604d73aea5bbc9cea45d1956",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f23c72a57b9ac91f876ed187fa2e8182eed9ac": "276f789102cffde71305026e17b7ef09",
".git/objects/07/2d5f62384076ff18c9f92b5d92ad8747d86c0f": "36687bcb1229e9d32cc746877744ebfc",
".git/objects/00/102c52b4f9b6bb3dbba939168f9c8ead5391ec": "4e1208ebdec76c17968b096091d5bb90",
".git/objects/6e/339eef32b41f86d84801a73133214336d304f8": "527bf354a4f12433fd432ea3e689ac02",
".git/objects/9a/f6bd3dc326469035f742afffdec116f3725e9c": "dd5196a932743d94803024baae6895e3",
".git/objects/36/d458bab3abaf0e7460b0c0c9f1f71fdc2d6fa3": "03b770cf707c48df72050d0de714c7d1",
".git/objects/5c/21050bfdbad5a2360afbb3081b3a018ca6c617": "e12b9403242263e8cd9094313a881890",
".git/objects/31/4ed0dbf08ab535833d7cb31009d45f913f8d59": "e0e820cdfc530b478e0cb98fb32787ba",
".git/objects/65/9072dc37df143f4e6cea1731d5829ab31057c1": "b38e5d79de704354228e6c7f93651944",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/62/78ba65c62b327bab488075d6ddf1dca0164299": "412e29f89517b8948703c2d426cee391",
".git/objects/98/e8c22c363c18c132d0365d2021d84440fdbfc4": "024ebc4c56b86fec654bfd69887a86da",
".git/objects/53/1847a7c61507c100f1d7c42b6833af220666f6": "69855e488145b82cfb1ef5a9fa8b74c3",
".git/objects/5e/61367a643c99818fcc8d4989f4831deb46d2fe": "9795e74a39031192247d07aa88d045ea",
".git/objects/01/cc502a303b4b54613e63aca859126f9d79eb1a": "897c915e1881eb310079768621170253",
".git/objects/06/e02eb2604cfdd0ac820b8ee2f395c841673be9": "d0f033b6a409903d5c0cf872190c76bf",
".git/objects/99/2ef71979d9181ccf43a7fc6372ebe0e3d7eaea": "22ac83c04e91957ad4ac41337bd15a3e",
".git/objects/0f/54d9dcb863f72ecc1cb113235fad705965f030": "6b7b9da10e6cf2d238bfb912032b1b0d",
".git/objects/bf/ade89198428f64471bf88f082dfb52b0580346": "f8f9b7c2abac8fb19782348618e9f495",
".git/objects/d4/356209ad7614a1c7ec991b202ce69b9291edc5": "a8a82177e0b54bdfb7a6ec90c77ee293",
".git/objects/a0/8f17c2d0d5094ba4cda0be03007fc8c9092f98": "ab1fb0fe72595a0c15efc68a945964ea",
".git/objects/a7/7560d83df16f8c0e6610777acc9c60bfff7346": "ae847c83a79ae6a1c6409c881b6e1437",
".git/objects/a7/f6d5e5c079648a45b0056f6163585745c74ab4": "78846a2aba891eb6534707bab5247aa9",
".git/objects/b8/439c373eff64f2c9c681267b3e00adbc30b221": "e901d2cf585747326c1465c2335e6b36",
".git/objects/b8/c5ff3d6fef6d2cc379c0a66ffbd9951d70c4e2": "751fae9e37d82bcc176a8ea9bf426eba",
".git/objects/b1/3bb0691bb72baafbc9e140439dde3a0ae8c8b9": "5493bee1d6f20fbdee8323a585745d88",
".git/objects/d2/82098452fa48d61727e0eaf71ceb0c68e94973": "5863c127b8ed3949137b6967490a070a",
".git/objects/d2/d539950dcf49ac05c432f9e92f9afcad4862bd": "9df6e32896062a7d19860b91fbb88705",
".git/objects/d2/27c1821cd1e54a1b91a1d35559eb624eb27ecb": "dc61558fdc06bee45c30b4a1f78e5e3c",
".git/objects/aa/5e89eed119e9f0ce1d813cdcf542f1bd4ea167": "63075733ebc702825df0da47dd5f76ea",
".git/objects/aa/c9bd148e27aa58617ac8578a89a6c8c3977af8": "117d94ced88328ef20eb1da9920671ea",
".git/objects/af/29a4a2cd8faa210785e64bdb8a078f75a923c2": "467ebb2d2d9758a5115097ba5c8710b9",
".git/objects/af/408270508958c307aba0ae8c9cd54edcdfba9c": "b5bb45f9a33d0e7053cf80ba1d48bda5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/aa49bdf34e70a5e52ff2e1a54c83e75cba0376": "3729f9f1314b7facba49c17878a5ee63",
".git/objects/a8/c862407868494e13d2cfbcfa6040102119749a": "d357c0c1f18902f6677ddd209ea3de46",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/5ba2bf153e7908ce29fc391cba7de7ae157924": "94c7f6afa21119d5953a18e1f6b4d6ae",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/278ca45435f73559196d7bafbeebbaa9229eb6": "570ef65e7d7c31ec4aca488012b2b46e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4a0f21d140f59ceb2e26d5e78338083dc1cb21": "bcc759495adc7013a5ceb0daabba80a5",
".git/objects/c3/a2a115ef4f99665fe0410a07a5425658c8d611": "fa40579073a5646ebdf2fad848cfa480",
".git/objects/cd/3d45ff0ea1759d4109c6b0bf6be147b5a946a1": "0bd63725c24329cffe35c5fe30ddeff0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f9/7f5b1476c04952b43b66a1f91a28ca40d5a00c": "c8bf23e6d44b4a08b4997ab2ff32ab70",
".git/objects/e8/9d9f191593730a02f8a8930d0db80bf7ea39ff": "1bc71dc6b8bd5763eae1fb38338d1e78",
".git/objects/c5/7f7a0f2c50f087b9334df689d0f1bbf82a75b9": "0e6967fd82074d7569394b377e7d1da1",
".git/objects/c5/80b6dff61d7ced42d6e28ddea84832873b0043": "d65de68462f69b9f287a76ad3ba832be",
".git/objects/c2/e2c60709d5997c5fb9e28a7e7299bd3c8c2549": "0017b24cf495ff949e6d20f03634b9bf",
".git/objects/f6/d8fcd0b3ee4bfdd40a384d92c2a7e085017ad3": "b7762ac6bfa1d36ae803913647a61bff",
".git/objects/f6/feb233763174746368a4ee4cb607086a7a214c": "f90c1032612485d98219c079cbe12cbb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/adae14d09b66ebe5120d8c6e5254fba643ac75": "05616dc1ccf34e77a490a0ff8770d02e",
".git/objects/f1/c9bb09ba74d9e822c6fa232acdc4a98f21c404": "82fc31ab7acb068646f53706505b221a",
".git/objects/e7/290eaaa5519ab742f5f732f418354fcd21dfcc": "4c601bdf49813b909ff93b53479f2297",
".git/objects/e7/bdfd10b2c27ac6c69209b15f6da027b6739052": "f7d0b2f2cd085c923a8c7ed471e5f4ea",
".git/objects/2c/f6b336dc3a157b6e85f2cd34a66b8612d64ea5": "78d9baab695673cebd3d78abe7a4b3f8",
".git/objects/2c/c60db4c7412ca95b9446779e498f77c15b5757": "6039128c1d6f41325c9e604b9678effc",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/0c3a332cdf2b68bc05c1128ae2d45550a54b63": "18799555939b9b75a7acd602dffad7c7",
".git/objects/83/b18fc4064e8b63b7ca06ff82b1babfe4337647": "5aafcb271999502f2659eb4fbe78c4af",
".git/objects/1b/32809cb463f54d24a58bc20e3f324c0b2e6b5f": "71456c70f44ea1308e89e2b3bd3f515b",
".git/objects/70/f48a03b44952e178047fb1380da850bd4ea635": "1c89d757b3c1c24f61fab05fadd266d8",
".git/objects/1e/31ce3eb0daf4e4ccb72672a835417efabf236f": "682893e5f91840d97188d9f695de0c1a",
".git/objects/84/d885d1bb70fd82f9c9e8f3ca68e9551a52459b": "3a079c3d7067bf4cde8b1e9844eafcbe",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/350b44897c15313d335669b422fda18e3abb94": "79178773a8d984065436dbd90d89466b",
".git/objects/23/bc8beae0c929d40a684339b24802e5d37c42d4": "93b81638afed64706658cd471ea03180",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/77938f7c7ad9ef25d2f35743df2e734a7529bc": "06d2e1fbafaf5b519cb8f80a523cf9c0",
".git/objects/1c/150d2fa3dc9192bb696ef64ba091a35f24181e": "7861ea493571e01754c62d2355222698",
".git/objects/49/c8fa24fefdd47d01434629ca22960f1b8befef": "31d8e8d21a5ebf32fb8dba5c7fb31b48",
".git/objects/78/15981811df94b703b4f845f6110e079d5d305f": "c3212041fa1a2830a310c054de3a0544",
".git/objects/78/a27cc87fe08a41e70e4753df82e1c748026f8c": "63c378270fe2d4ffab60e61c646c51d3",
".git/objects/78/4562b4e72224551314c5044b9f58c5fae4f8ef": "207c3a57ad791d045dbc7bc3390536e1",
".git/objects/8b/0e5fe76f8cac84884dd01eaa65f605d6af332c": "15d9673a7fc8238fb9cffd087a953e19",
".git/objects/8b/57117fc0c19a5e27752b9c7b4990fee8eb371c": "3bbf53962b32db511cedd24dc1c5530d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b10e451507e88017502763555913d96a",
".git/logs/refs/heads/main": "a47d0b68136b59c9eb3f5e5c94f2bfc6",
".git/logs/refs/remotes/origin/main": "193daddb10d791fee906c45fb926d838",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c2c8bd99d3a6e7401294f5005714333c",
".git/refs/remotes/origin/main": "c2c8bd99d3a6e7401294f5005714333c",
".git/index": "c84906ed1f2ddc0a8e75edfdbec13ee8",
".git/COMMIT_EDITMSG": "c0e0e6879a4f839a99631f4e7c125b69",
"assets/AssetManifest.json": "99fac7c38f424d596ca5d4f7b5913e44",
"assets/NOTICES": "3b9dd5ea5934ab00eaf0bf4ef11ef527",
"assets/FontManifest.json": "6d072e2ac850f949cd769bb8ffc4a6ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/counter_img.jpeg": "f522941390fbb3876b20cf92d400280d",
"assets/assets/images/serv_img_4.jpeg": "ffb863912943d39ece541bc5d7d6ec08",
"assets/assets/images/bn_easyvat.png": "d0f45aab42fe180234ae9de782b6f624",
"assets/assets/images/ic_twitter.svg": "64c341fa98a5b20598ee33d2a7f3d8c4",
"assets/assets/images/banner.jpeg": "88151509fc8c17c1290dd0f2f96874b3",
"assets/assets/images/bg_banner.jpeg": "bdc7ccf6d0a10d24e195d79d60b7670d",
"assets/assets/images/ic_cross.svg": "1b7ee28a02ddbaecd467d2ab3c8b8a9c",
"assets/assets/images/ic_team.svg": "a789e4d17f2128467b17457fd33db348",
"assets/assets/images/full_logo.svg": "056693c528e75ebc560720295bdaa33a",
"assets/assets/images/ic_windows_sw.svg": "bf7f7e6fc083fb2149403ff2d6d46332",
"assets/assets/images/bg_footer.png": "6311cf6cb5ec49f77a7088d85fdae3a2",
"assets/assets/images/ic_tick.svg": "bf480848d341039eeb5e1d3b688eef9a",
"assets/assets/images/cover_pos.png": "d8933242ab99157a895c9fe4184407a4",
"assets/assets/images/bg_service.png": "e792ac6a7c2109503c90c1b531d66a9f",
"assets/assets/images/serv_img_2.jpeg": "3dc76b99a075094e8d1429131f682314",
"assets/assets/images/ic_linkedin.svg": "7c9526f1522ae66dbe231f3d81e3c7b4",
"assets/assets/images/serv_img_3.jpeg": "b8dd397aebf3bacd05e3480606762098",
"assets/assets/images/ic_mob_dev.svg": "ff5bdcb601c13ff3fb874d12f0dcd869",
"assets/assets/images/bn_edine.png": "5ac4fd8acb52a0523168d50fcbd9aa3a",
"assets/assets/images/ic_soft_dev.svg": "5357e0004adac0008ad3d2dab117f677",
"assets/assets/images/bn_waiter.png": "f6012c033a1c6bf5abe52c354de41f6e",
"assets/assets/images/serv_img_1.jpeg": "1152910b878ea2a6cf04924b934e9057",
"assets/assets/images/ic_exp.svg": "013130b89574328c0660eae2dd556262",
"assets/assets/images/success.svg": "4790602d73f37812dfd6329bb5fca516",
"assets/assets/images/bg_features.png": "23220024cdcc855a49307748e79ad492",
"assets/assets/images/about_img.jpeg": "9f02071777c3834f622a27560d4069e7",
"assets/assets/images/bn_easy_pos.png": "665521dc0b9b1e5be12ce5e9a21f3b2a",
"assets/assets/images/ic_fb.svg": "99ba8dba181bbe72930f372765d74ab4",
"assets/assets/images/ic_web_dev.svg": "559713d2728659f94174b1133fb86326",
"assets/assets/images/ic_instagram.svg": "5f6e12f22e1162f7e955a15b9ec951c6",
"assets/assets/fonts/Nunito-Medium.ttf": "26a1b6a894383eba0c5139e8b7174677",
"assets/assets/fonts/Nunito-Regular.ttf": "04ba025b0c09479276c42d4913d0ad41",
"assets/assets/fonts/Nunito-SemiBold.ttf": "5e6fcfa4f65fc3c42e2bf859926c8a38",
"assets/assets/fonts/Nunito-Bold.ttf": "f14bc25a725851f54138aefcee1a1a3a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
