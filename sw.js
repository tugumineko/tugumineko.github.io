/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/12/高雅创作/index.html","e2d13521427c0ef14dbc46e78fda0e89"],["/2023/12/23/素晴らしき日々/index.html","fda6dfd023d84599d95d6c0e2a2704e5"],["/2024/04/29/markdown-syntax/index.html","492dd6bd3065357f23b543ae3ca950dd"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","35a1ef25600995de667bf45e83eb2cf1"],["/2024/05/05/PyTorch深度学习/index.html","0f9ee8a14c818b28f5f9ea798675e233"],["/2024/05/06/python图像处理/index.html","c4d027b9e9440125798efaed9d0dbd5c"],["/2024/05/08/the-tour-of-cpp/index.html","757e853cd63cd663c2a11f150fb0d32d"],["/2024/05/19/生活在树上/index.html","a908cd457f4975fb8eb813075e29e37b"],["/2024/05/23/vim-syntax/index.html","7b8d2ff2771ab8892f1b0325c8f52610"],["/2024/05/25/正则表达式/index.html","ceb2971e479f5ef31bb2ebfaa22e6d11"],["/2024/05/26/diffusion-model/index.html","6bf038557586146ff5afaaa3b4660f0c"],["/2024/05/28/user-malloc/index.html","8bbc079cd37fb64728a3c19f0056f20e"],["/2024/06/05/状态压缩dp/index.html","41b8c359ad9d4d1b84ceb28502edba76"],["/404.html","31cb95f0573eda03b8da4c6e6cb0c317"],["/about/index.html","0d4fc75140b423f3b2350bd757d0343f"],["/archives/2020/04/index.html","2121597b80413ea641cf5237008f2d22"],["/archives/2020/index.html","4abb308bc1a5c5dc1a5a4c2b8476205e"],["/archives/2023/12/index.html","562c9b3a1c741e4e0387605e5221f955"],["/archives/2023/index.html","eee100ae7ff0eb8a8c1065c7cba881e6"],["/archives/2024/04/index.html","cccd985ff6bce6e81f03ceb91e811804"],["/archives/2024/05/index.html","983a0f1398fc854415ddd48814bd9eb7"],["/archives/2024/06/index.html","d0f112788dbb056e4bc7e276c3bcb8ed"],["/archives/2024/index.html","e0aeb43979c28ab48e1e658cef330dbe"],["/archives/2024/page/2/index.html","4079c9c222d82073754e2ace7aeca5d2"],["/archives/index.html","f1bc0503d959b5df0e995d611f3dfa1a"],["/archives/page/2/index.html","ca8458d2861a8b58da376150880df3bd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","3385df139bbc51e6f8e03e8c18d60ffc"],["/categories/cpp/index.html","50fd6f9f8b028458a3cd20e0e357d63a"],["/categories/index.html","e57e244f059722c825001959901d29c0"],["/categories/markdown/index.html","9fe6a828f283327c03607d74d3a643bd"],["/categories/python/index.html","5025d0c471be03141fe00d47eac0f6b9"],["/categories/vim/index.html","48e33275ac27efe5707247c7791e84e8"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","400d857d8866c3e688230f2a9d7480ae"],["/index.html","70db72eff844c418fb032e915d4bcb38"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","58ee30e3ae6509fbba885e9566b2cb90"],["/sw-register.js","8805d9d64d477c26897057e8b768bcdf"],["/tags/OS/index.html","fc10571b4b1007ea49a2a52aacd1d49e"],["/tags/index.html","e9126b25fa15b196efae47387f0063ac"],["/tags/刷题/index.html","b2901dcac36ebfa8b26b045140720cbc"],["/tags/前端/index.html","d8708f736cc7a345ecdb76ef1095c768"],["/tags/数字图像处理/index.html","884681630308c78cef8a275a2c78a34c"],["/tags/数学/index.html","fefc3e3d981aa17397bf1ccf4d46c9d0"],["/tags/文本编辑器/index.html","30c9458a488e16e038887c99ae4c7216"],["/tags/深度学习/index.html","fc1c8d257134cabf7af48949c34dbb8f"],["/tags/算法/index.html","785c51c79da780fa066698fc531c6179"],["/tags/语法/index.html","f2dd9b37328e5079cf3ac48139d5f729"],["/tags/黄油/index.html","ddd46ffacff98fbc4805575d38f87574"]];
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
