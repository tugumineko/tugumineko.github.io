/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/12/高雅创作/index.html","f8baa23da98477324b755db56eec3ef8"],["/2023/12/23/素晴らしき日々/index.html","a04c162210bed0be0f515321aa0882a4"],["/2024/04/29/markdown-syntax/index.html","d84522602f386826288ba208af629745"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","cd99a52c5b432107c8147dbfec9eaf80"],["/2024/05/05/PyTorch深度学习/index.html","a739ab9b49e1947ed9898239fd8e850e"],["/2024/05/06/python图像处理/index.html","6ad0fbe64e4aa160423e6f78fb516a18"],["/2024/05/08/the-tour-of-cpp/index.html","0b0dd5755663183e3bab23f360e7d48c"],["/2024/05/19/生活在树上/index.html","73028f510b7e1f835ca5e65078ad4ce0"],["/2024/05/23/vim-syntax/index.html","9f721fd7138fea98e8f82027a04f0bc1"],["/2024/05/25/正则表达式/index.html","6f33174231814da82400201a6affc59d"],["/2024/05/26/diffusion-model/index.html","cd204317991799ac7750d350e854ae96"],["/2024/05/28/user-malloc/index.html","ba8733bfe6643d36b4ee0d329e7bea9c"],["/2024/06/05/状态压缩dp/index.html","7047f02e469af752f5f2cac5810772b6"],["/2024/06/10/STL/index.html","d205591175524f24959d7f58d91c6c8b"],["/2024/06/30/picture-format/index.html","fc18023d83fb721fc379e7fc6f121d20"],["/2024/08/17/GAMES101-Assignment7/index.html","236d7c844d292c4781be951848c1fd3a"],["/2024/08/18/cpp-thread/index.html","c99b21f1c0693487105e232d161e6c91"],["/404.html","98b030dbcbbf4695a9d12a4177bab08b"],["/about/index.html","86da84cc855bba69fe9c01aede736a92"],["/archives/2020/04/index.html","4092501e481fced1e6f123f400cf03e8"],["/archives/2020/index.html","46173cf29caae240e733bb1c56e4f022"],["/archives/2023/12/index.html","26297ab1f6136e2473384dd5d13aca90"],["/archives/2023/index.html","289294042a776c511aa46c4fbb243f74"],["/archives/2024/04/index.html","af95e852444a029ebcf125de10c86fed"],["/archives/2024/05/index.html","13fbc14142164d859c9461625b2a6938"],["/archives/2024/06/index.html","d57c334d5f2b423277f349cbcd68744a"],["/archives/2024/08/index.html","069b3ee192e841f9a9a753242c53de5b"],["/archives/2024/index.html","bb115667511bff50e7cc5828401fd140"],["/archives/2024/page/2/index.html","94ac33efe82da441a6f801c897737c88"],["/archives/index.html","1412e7821d10acda056271df5f0a75da"],["/archives/page/2/index.html","e07f1d0c58ac071e17e5a6e64bd36ffa"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","47e972521c33ed7ab27c76c69c14117a"],["/categories/CG/index.html","0b30cfc735ff400462d9a4b2c0e6bdca"],["/categories/cpp/index.html","6883980ac13e54d2894dcafa4537f6ae"],["/categories/index.html","9304a4b2944bf7933e37180d818161ea"],["/categories/markdown/index.html","5b6be8d2297e537af3ff044fbb753e3d"],["/categories/python/index.html","7d85ad32de1758a17d331ef7b13e31db"],["/categories/vim/index.html","7338416c9b7dcbf9b4dea884168e0cc8"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","1b66cdcca6f29618998a4e45c3d1dc56"],["/index.html","bc7adca21922cf2920656a02511a90b5"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","e4c1d897ba1bbd0a3d8b5087f0d092fe"],["/sw-register.js","6ef92ca3d8bcfd9c4c4dc1c221e1fee2"],["/tags/OS/index.html","302830575adfa84e17a700de3b49ded7"],["/tags/index.html","5f52b9146a97dbc506cd582b5a0651a0"],["/tags/刷题/index.html","50b0b83ce664fbc7edeb850ed6bf6578"],["/tags/前端/index.html","95570b8f8533ebe13d101af3b03b5452"],["/tags/多线程/index.html","6969dc79ee345ce26473c04f54424378"],["/tags/数字图像处理/index.html","1d8a619b4886e4800c6f16a7ff04fbd7"],["/tags/数学/index.html","a0390fa0b96bdc38b11849b9296380e8"],["/tags/文本编辑器/index.html","a6252fb13beacafab426ba6f2d27b4be"],["/tags/深度学习/index.html","e634bf6794e159b1d057cedf45ca738a"],["/tags/渲染/index.html","b14fe12c97364e14c792cf2c5107ae59"],["/tags/算法/index.html","756450ac17515a73c6fa5fe155bf66c1"],["/tags/语法/index.html","3ed64e10426eea4e2211d204eff50ad3"],["/tags/黄油/index.html","436e622a26f7ba1fe8064abed3eb498f"]];
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
