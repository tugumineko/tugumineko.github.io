/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","8593b94f1156e90b649b3f93bc8ed09c"],["/2024/04/29/markdown-syntax/index.html","942c68e150e2252bdaa07250e302ecdc"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","a4e6ad4254adb145f697cfb3ecbd34f2"],["/2024/05/05/PyTorch深度学习/index.html","47188b919208e886563fc80c3509f328"],["/2024/05/06/python图像处理/index.html","a7e2865df3aa268f678b800631e7eb10"],["/2024/05/08/the-tour-of-cpp/index.html","797b7f135015db4440c21891e88b3b0d"],["/2024/05/19/生活在树上/index.html","3d4d4a977249526018dbeb7cf943402c"],["/2024/05/23/vim-syntax/index.html","effc373113beb158e7f1148c03109d08"],["/2024/05/25/正则表达式/index.html","f459734a5fd66cffd7bb642a0154c010"],["/2024/05/26/diffusion-model/index.html","46bd216b0ed27da3329a62cb675d770b"],["/2024/05/28/user-malloc/index.html","49f816099e75a8e39774d205c8745c49"],["/2024/06/05/状态压缩dp/index.html","00e7342dbd2c1e0a1125f95d24a96a79"],["/2024/06/10/STL/index.html","abf2312c4b2ba8ff7fb147b92778ec89"],["/2024/06/30/picture-format/index.html","feca49b03a308d0053db9a6c64eee919"],["/2024/08/17/GAMES101-Assignment7/index.html","f87cc0069836d28e91b481ba6631d45c"],["/2024/08/18/cpp-thread/index.html","cea4fa0e0f7240e47deb23da95839b08"],["/2024/09/06/ArdiFan/index.html","623d449268cda9e8c464dc5bef7090fc"],["/2024/10/22/TA百人计划笔记/index.html","48c64cba567d59492a1c32ae8920aead"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","26c37011536f853d95d8f496d4eb6019"],["/2024/11/05/cv-concepts/index.html","e3c015d81bdd1be73f2574644f43b04e"],["/2024/11/11/softras-environment/index.html","84234fe0be3228cf3d30a3fa9e96ece3"],["/2024/11/25/3dgs-sketch/index.html","c44ba1fa879b0769516ddb5cf07fc9b2"],["/2024/12/02/mini-splatting/index.html","0616ee25011dddc522d5a9826178097a"],["/2024/12/06/Quadratic-form/index.html","91b8eb7be755261e5e08a92a38ecee2f"],["/404.html","912a925fa402d0e6b665b73f3ef2a57a"],["/about/index.html","2589af3698fbcb83a354ae0e9c964bb9"],["/archives/2023/12/index.html","1e8c9902f7b1d385ef90bd1ce75ae048"],["/archives/2023/index.html","f5a7195fdf3a54628f5921f7d0ccee7a"],["/archives/2024/04/index.html","7ff2762a13abd7d9e8c42d58ae2786e2"],["/archives/2024/05/index.html","a6649b922ad42037f0d7fde786cd0b0a"],["/archives/2024/06/index.html","e522c98a573c7b4da9634a3b828b25a1"],["/archives/2024/08/index.html","1a21f08d34853ef75251d8727e1110c0"],["/archives/2024/09/index.html","bb06707cb71c7d2b633b5215288748b3"],["/archives/2024/10/index.html","91617093740f362b8def8895f7580243"],["/archives/2024/11/index.html","ddab563a8b4276594d030ada00af1664"],["/archives/2024/12/index.html","15f43f8b5b4d5ed06160c1f1109c329d"],["/archives/2024/index.html","c97ece41e4d953d2a9b958174c12832f"],["/archives/2024/page/2/index.html","c6be6306e8377b01499a1d2a3e3b336a"],["/archives/2024/page/3/index.html","b7c2e7748585729737982f547f5cc5ca"],["/archives/index.html","3293406d65b6d60b5a5d48a7977504a8"],["/archives/page/2/index.html","62fc0709a6c0c28d2e16958e7684f7e8"],["/archives/page/3/index.html","935008618f54455222afb55bc83a02ed"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","9e540a87b7ffc84aa26eca936f9c8a88"],["/categories/C/index.html","e98b23d45a7ca1a4a95f5b150ea3ab9e"],["/categories/CG/index.html","ca35b4f1e4803d04727005d7b1c51644"],["/categories/cpp/index.html","94772c03fc7a5db2fd94fc73b59f6f16"],["/categories/cuda/index.html","ed458ff86cceb659e433ce177f60fc0f"],["/categories/cv/index.html","b7e0249ef4da6f3dc65c24bee5e49f26"],["/categories/index.html","19f4ddaa4abffd997b247d8b352a90d9"],["/categories/java/index.html","01656f6a6a97ccf1633da8866f030e6c"],["/categories/markdown/index.html","9824090c274bfb78370a57b73247d9d7"],["/categories/python/index.html","2a7bcdd824dd495b268278d0eaab101c"],["/categories/vim/index.html","859c418682ffc9a0c175b14d10f5c035"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","7fe8978cf98be40b935735bf17c40b4c"],["/index.html","12de2ad2c2a913e92d65c0e106d16468"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","f584a3eff8dec1ddf782a2b08fe01660"],["/page/3/index.html","dea87639f19a285622ba35f86723655c"],["/sw-register.js","a440366d7e46e584ae77a4f8b106abde"],["/tags/3dgs/index.html","febefadbf57217666cab4a46507e2ac4"],["/tags/Android/index.html","6f070d47b752d00024b3a8a79e689460"],["/tags/Arduino/index.html","eedac31c01e5dc2377d8f80831de880f"],["/tags/OS/index.html","606e06e5f837e9d400cb9683b10da809"],["/tags/index.html","a043396254b7da51d29767a0dbd3d3cc"],["/tags/刷题/index.html","9d341c5b58a640ca0b3cb33c7ddfae2e"],["/tags/前端/index.html","3c03da3507215c86e8834e5c4c2b79d1"],["/tags/多线程/index.html","71a199862839e5b54e2f2ecb02ac4047"],["/tags/数字图像处理/index.html","b4d1dbd70ada6f0969686158143d1dad"],["/tags/数学/index.html","154592dd1a25f5b2a94ee3fa84ce84db"],["/tags/文本编辑器/index.html","80249523225fd7c3935a8ce979f4d12b"],["/tags/深度学习/index.html","ec5ae14266b659bcc6be2f4f872958fb"],["/tags/渲染/index.html","faff420ec61b46e8dd81558efffd30bb"],["/tags/游戏/index.html","0075bf5c54ce37c0ab5f90b1ca188a75"],["/tags/算法/index.html","c2cf72d30135800c026ea38066c3ef86"],["/tags/语法/index.html","3d5d54102e617d0fd836dc95acfbc560"],["/tags/黄油/index.html","b01218a1ac2005c9e5ffc43e70a8eede"]];
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
