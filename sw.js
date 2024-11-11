/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","d424857fa34d68f0fe084fb04319d668"],["/2024/04/29/markdown-syntax/index.html","544dd6ce43bead1bfcf1534e899cac5f"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","bff12112a83305c67b5aa9283bbd1ee2"],["/2024/05/05/PyTorch深度学习/index.html","f10f696803b2bfb278ad2310e3776f2a"],["/2024/05/06/python图像处理/index.html","7f1df4e35ad9137d92cc7478375d3477"],["/2024/05/08/the-tour-of-cpp/index.html","b9c11e9ec4482eb7c862448fc49d4962"],["/2024/05/19/生活在树上/index.html","523e62abc1292bf4bc83851ee31e5ffe"],["/2024/05/23/vim-syntax/index.html","8f7d354fe149b3c3e2cafcae91d5f32d"],["/2024/05/25/正则表达式/index.html","d1a0ce489766cdab82943d80d26ea325"],["/2024/05/26/diffusion-model/index.html","6db2515a1ddcb7840461b96fb98070a9"],["/2024/05/28/user-malloc/index.html","c314a55eb02080e5fa35a937e47651c1"],["/2024/06/05/状态压缩dp/index.html","aee17b64c626abb7a93a197b21d28921"],["/2024/06/10/STL/index.html","e5a28e65b9d3ec7df8fe270eb887a094"],["/2024/06/30/picture-format/index.html","671530aff6195eadfe789a7ef376b7b2"],["/2024/08/17/GAMES101-Assignment7/index.html","bb9740ff5a3c347e697a1f2cdc43e756"],["/2024/08/18/cpp-thread/index.html","6b26bc6884e7c8e517fba337a75d7617"],["/2024/09/06/ArdiFan/index.html","05859c0a0f9b878b642b0e30596ca660"],["/2024/10/22/TA百人计划笔记/index.html","9468614dd00c41a8db8f8b403a5f23a0"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","c849cec532b02c14cddec9003ec55d26"],["/2024/11/05/cv-concepts/index.html","1edbf5b710c4fb214e0c6e3e6d6c4d5f"],["/2024/11/11/softras-environment/index.html","b98afd5fc412f8a30452360042e78a91"],["/404.html","5fcec42714babb4341ccfa8ad4b7d982"],["/about/index.html","dc67a62286d70a7161abc7048c4329ee"],["/archives/2023/12/index.html","e145980a43d154d9cbb6e499c89b4c42"],["/archives/2023/index.html","f3d3ea0ba04b301075de53da5fd369a9"],["/archives/2024/04/index.html","90c5d29cdbab3a2bbfbc27b31172d766"],["/archives/2024/05/index.html","9e843eaa6680cd0cf4cc122d65d4c505"],["/archives/2024/06/index.html","f47cbc3897d54f8148595855d198887c"],["/archives/2024/08/index.html","6618c9e860f2c77ad0efa79a8191d52c"],["/archives/2024/09/index.html","2bda91ac7a4a352315da0f52a5e09a55"],["/archives/2024/10/index.html","17be23df6452d89524f0206150f49e17"],["/archives/2024/11/index.html","cfca80dd088db70a78aa77694054995c"],["/archives/2024/index.html","68d7f8133b9f066a10b4f78033a72d57"],["/archives/2024/page/2/index.html","1d04807b05481ea958c217fd9e119032"],["/archives/index.html","4478d5952cdefcad6858b0e28ca9d2af"],["/archives/page/2/index.html","bf0c6691dff9ef524cd6a20629eb7787"],["/archives/page/3/index.html","19123b7d56ef7a815c32f08f4901c17f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","1c63854692b293640b702a02f4c75b17"],["/categories/CG/index.html","d07338a07c71b0b063b5500da214c651"],["/categories/cpp/index.html","e1a30ae1aa9acf51ffc7804ee89364a7"],["/categories/cuda/index.html","e3f4d799ba25c68c74756d5c4c188c06"],["/categories/cv/index.html","8ba0b23fce25f181a037e39fe9827535"],["/categories/index.html","7cc97f11856a6b31655256778b58026d"],["/categories/java/index.html","d1bd5400407d3cf380ed10c6c5f4f9a4"],["/categories/markdown/index.html","0460cbeeb4d5f4dfde335d9a0dfd097a"],["/categories/python/index.html","ec19f342dc7010dbaa29aac45d00865c"],["/categories/vim/index.html","1c920783505afd1e252e736d6d81b386"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","d97e9d598a07c2656fb3691f08390ca3"],["/index.html","30c9656cfc6637870fe7e6070b4dbf0e"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","4270e19c0b6af24e0e8732329ca185ec"],["/page/3/index.html","880492ce17fbeafcd6db22df604462a3"],["/sw-register.js","6cd5ee02ec665c4759ebc993fce14b44"],["/tags/3dgs/index.html","aab56cd3d0a6314b111abfb8d347e006"],["/tags/Android/index.html","a662694901654fcc8d3bc4c53e9c441a"],["/tags/Arduino/index.html","4000e70a64080098a961a9a3e72bf53b"],["/tags/OS/index.html","e209375dd37a2b3a1e558d5e5242d1dc"],["/tags/index.html","98afcc8d433bb126f1fe85c528d734ee"],["/tags/刷题/index.html","880b12e3b5ba31208d45432662d7e5ee"],["/tags/前端/index.html","61356d1ff483dd6bd9bed0e7ee404a68"],["/tags/多线程/index.html","425e7c9660db764cfaea88eb7fc92bb4"],["/tags/数字图像处理/index.html","03d264adee617d7530849894f3e1cb59"],["/tags/数学/index.html","34f7b318348ad318c9c794df82a9bb06"],["/tags/文本编辑器/index.html","916e3dac9a7b1caeba761704a9dfc828"],["/tags/深度学习/index.html","06b2a619e3e0e2a2b2f128895347617a"],["/tags/渲染/index.html","008833ee44ccac2b4e8bf5fccef8ed53"],["/tags/游戏/index.html","1871a073117b5a2fa01456606fad06c0"],["/tags/算法/index.html","84ea2bb32d8bfad51d25c9966e5a3885"],["/tags/语法/index.html","9d0d8cb8eac9b6d5fb6ec4437113b824"],["/tags/黄油/index.html","ed8a99fe27f278f6252e6da09f74ae98"]];
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
