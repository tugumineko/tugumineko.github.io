/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","779790e8c95f311e8bde10312fcc2e2e"],["/2024/04/29/markdown-syntax/index.html","f60ef92ce5f9d6cc2ffd90e8f039f550"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","ec6ff401efe3ad9026fa8802e1f59863"],["/2024/05/05/PyTorch深度学习/index.html","58ecdcedf527b36cc116381c9f5d0426"],["/2024/05/06/python图像处理/index.html","97ee55e1121071bcda4337ded6ba4c0c"],["/2024/05/08/the-tour-of-cpp/index.html","f3701c6d2188f25d03fc89979524c49c"],["/2024/05/19/生活在树上/index.html","4af08cb118dc5f498d4f551d0ca70e71"],["/2024/05/23/vim-syntax/index.html","e4f77f4db56ae8c7215fa15c9a7ed08e"],["/2024/05/25/正则表达式/index.html","25c42b8e678fc2c456707d0f689d38f9"],["/2024/05/26/diffusion-model/index.html","63c12efd5841dae2095b9c3ae63bc09e"],["/2024/05/28/user-malloc/index.html","29107abad0f4231150b314a0275ef5d9"],["/2024/06/05/状态压缩dp/index.html","0ed852e219c0faad7ad26d705adf01e8"],["/2024/06/10/STL/index.html","23e1bda8a80fa196586eb59990719451"],["/2024/06/30/picture-format/index.html","da838cac8d3e177d32a2d870d38ad882"],["/2024/08/17/GAMES101-Assignment7/index.html","dddf2641a0c3c69ef96f56eb45536f0a"],["/2024/08/18/cpp-thread/index.html","8ab3a0616dc4bac3bfeef168702cc881"],["/2024/09/06/ArdiFan/index.html","1fa1b66d60b062eda1a2eb4295c8a073"],["/2024/10/22/TA百人计划笔记/index.html","2f46a65adfa0cef4e1d274506a34f22d"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","edc643b1405bbf5c363dc3c1acb5765f"],["/2024/11/05/cv-concepts/index.html","af28c1c62a9bdf2f49cd9642271a8967"],["/2024/11/11/softras-environment/index.html","dada5d8375c6ba75d5c30f771c623161"],["/404.html","6104bfe93cd4df23aebdee4c3d9847dc"],["/about/index.html","dc5f64f6899bac089a2b4c095e00368b"],["/archives/2023/12/index.html","169c1c9d6f7c8a08312cdafac2c0d5ac"],["/archives/2023/index.html","f55d25db3200ecf9d88274a259cd4b06"],["/archives/2024/04/index.html","142fd8bc1505c78e31e2f67bbbcbacdf"],["/archives/2024/05/index.html","cd71c80fcb5c60eb6949e6458b725d99"],["/archives/2024/06/index.html","7c1c252b13fadeb6025d689a01226721"],["/archives/2024/08/index.html","8edfb97fc024e9f50aa07b9b95a4b8ae"],["/archives/2024/09/index.html","d669d9d51eeedaa06ab6e09126cb69d6"],["/archives/2024/10/index.html","9c9989dce975d528f32d19ceeb5c2d66"],["/archives/2024/11/index.html","fe282dc281ab837d89737ea8b0adbea1"],["/archives/2024/index.html","a3a5d68176921bd566092e88d93c7572"],["/archives/2024/page/2/index.html","9a2e40f12d3c46bfb8f4ec18ba55ee42"],["/archives/index.html","2abf4642a0be22313ede37763d35857c"],["/archives/page/2/index.html","bb742c5c35efce16c91d0c6cbd103ab8"],["/archives/page/3/index.html","63e7af3aa22aa5ef5cb5555ba34d0698"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","6ff7ecf66251852e65c1f7abd1e59d95"],["/categories/CG/index.html","2d35dd539fb9c29dac4a5ebdcd0f29dd"],["/categories/cpp/index.html","46c1d7b048275930f353825439b63e93"],["/categories/cuda/index.html","1c1633c8bb4d74806f2e81c114d14a58"],["/categories/cv/index.html","69c294c0b2ad44a3020ff6ef3d99638c"],["/categories/index.html","e1f44e2306dd21a6fca78069496b6747"],["/categories/java/index.html","b5d4ccc4994242a3b3f072a688d81c21"],["/categories/markdown/index.html","5083d46ff233136c181f8551d7e395bf"],["/categories/python/index.html","4ff1d9f2d574bb651c3100013bf4bbe2"],["/categories/vim/index.html","d9c93ae16a03e58d2a65e38bf1dfa0ef"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","ace6584b2f1badb5e99fa9de68fb8906"],["/index.html","23f6c4b3e07e645c6ae6449669b8eab8"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","abbd0a3b3efeba2d8812f5d7118eef03"],["/page/3/index.html","d27ba79def390264a4146de033cfe144"],["/sw-register.js","93d5e4cd6839f55b4dab1090ec322ec5"],["/tags/3dgs/index.html","031b15de5de16db2586c73d7f6b950c0"],["/tags/Android/index.html","fa8cb2933d34693f24d4e712e9098054"],["/tags/Arduino/index.html","7cefe3aa9a5ddc1193085ad8f0c8e798"],["/tags/OS/index.html","53ffabecb33804759f10bc01c273dce5"],["/tags/index.html","65db9d222c8c4c1f04060527691e1bae"],["/tags/刷题/index.html","071f783424f0990d84aeb45e030f596a"],["/tags/前端/index.html","f453b2bd95060096d4ba14c2e9ffd667"],["/tags/多线程/index.html","94350cb1c90f600eb0b0ba23215a34f5"],["/tags/数字图像处理/index.html","78a59e2ea0c370c05110b612d9a2e470"],["/tags/数学/index.html","93bc22f4ce2247b13cf8677096aa3481"],["/tags/文本编辑器/index.html","dc00756c1f7fb10e15c64867f35c036e"],["/tags/深度学习/index.html","0dead783601561341972fe02daebc6d9"],["/tags/渲染/index.html","44b1bdd7b929b1b8776cd5e2540b90df"],["/tags/游戏/index.html","8d7908c51805706c8323530f567a99ab"],["/tags/算法/index.html","65080e4b9d107163fce7b95160d4b82f"],["/tags/语法/index.html","d9ffc8922c3e5efb78d07437f237264c"],["/tags/黄油/index.html","9731504aeefcc9a0c2a7f2a9df233a48"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
