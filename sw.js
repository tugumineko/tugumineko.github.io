/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/12/高雅创作/index.html","cf66c6c4807ecfcb16a68fa104bf432f"],["/2023/12/23/素晴らしき日々/index.html","294c4a5183aba9e7f385ce755c9b582c"],["/2024/04/29/markdown-syntax/index.html","9ba6bde20b1d1c905bc08a5692a60695"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","0d22585ee82602012fb70d9ea663d794"],["/2024/05/05/PyTorch深度学习/index.html","00346079f56e087fe514d23ed241da2d"],["/2024/05/06/python图像处理/index.html","0b4b794080d88921241eb1cff43afd43"],["/2024/05/08/the-tour-of-cpp/index.html","8fe48a7a4922024f216e9a26fdb2471c"],["/2024/05/19/生活在树上/index.html","6daf42d8f94dc24446556a09cf5c710b"],["/2024/05/23/vim-syntax/index.html","0f67a2aba2c4929154bfdea5041c304d"],["/2024/05/25/正则表达式/index.html","861c8cfabf344db8c0380b05bab2c1d5"],["/2024/05/26/diffusion-model/index.html","f14f1c834c88fab3c6a3736430b71c37"],["/2024/05/28/user-malloc/index.html","b5986cc55d9624738d8447f324cce97b"],["/2024/06/05/状态压缩dp/index.html","f070dbc84f926e33c2ffd2e2a05f22e8"],["/2024/06/10/STL/index.html","ab44ee5d8546ca8afa05b70586fcb789"],["/2024/06/30/picture-format/index.html","c0dadfa3729a6c1ced511b33983adfee"],["/404.html","f5fa79c149aa2ebfca1b64daec8f225c"],["/about/index.html","f2a02c23c753b9b68e839f2e1675f4fd"],["/archives/2020/04/index.html","195229c13955fec2fbb92059f9fa7fb6"],["/archives/2020/index.html","a1a1d19aa5c9e9937d22ab9493ca5f4d"],["/archives/2023/12/index.html","357acd8c919f439b9318647cbcd4dfe2"],["/archives/2023/index.html","3a70ca91f2a16bfd7a02075f56ca4a61"],["/archives/2024/04/index.html","525709d00f9ff6aa2004f52017c09f40"],["/archives/2024/05/index.html","1a45c5685e53a4cd381eddfcf588e705"],["/archives/2024/06/index.html","d74d5f6559d25e2de0f72b9e9ed9f2d3"],["/archives/2024/index.html","8beaece0e29c65d370fe497baa0efd25"],["/archives/2024/page/2/index.html","ff371bb0befa514d999213318a62f63a"],["/archives/index.html","b616ed56037f4f3300a780af3ff8af94"],["/archives/page/2/index.html","dbeec99004074100106b0f825443da3e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","139208560610777848af391f67828d7f"],["/categories/cpp/index.html","d4a478d2a740cba4f9ed6a0723af17c4"],["/categories/index.html","5d3dc7b914e5fe2ac462053858c18b7c"],["/categories/markdown/index.html","5bb6d4e4a64c9a190e6b35f36c50f01e"],["/categories/python/index.html","901677ccaa2107954ae27fd8375f8e46"],["/categories/vim/index.html","1fda424b95e9a41d4112900e9d3e7a99"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","04148809c850fd42c877fde962e327d0"],["/index.html","ee7cdd5ba2d0ad3f5463bcb5a42026ff"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","799e11d55d81143bb1ded1b4f11cba1d"],["/sw-register.js","a29b53a1d00a0211f637fa891a5a9f2e"],["/tags/OS/index.html","3f2148c982bcd86969afdb7cf3916140"],["/tags/index.html","2de09b164bd608b1d1024243903e3bea"],["/tags/刷题/index.html","c442272180c0bce75c35871e50e25515"],["/tags/前端/index.html","41904083cfbed10b61a80515d95f5ddc"],["/tags/数字图像处理/index.html","3e5026d34698b302d9f605c6483d1dc7"],["/tags/数学/index.html","e324224d98cc91001de2df9bb22ad967"],["/tags/文本编辑器/index.html","d52fd1dd32ee5aed3e9cadfcc60b7d56"],["/tags/深度学习/index.html","d9b0d9964bdb45378a29eab503eb7766"],["/tags/算法/index.html","c9d6221800d1020362bd8abe5af054b6"],["/tags/语法/index.html","8eaeade6fd1893d361b3f300bbe1c032"],["/tags/黄油/index.html","f06293ec786f6b5f4b01eb6e0a63434b"]];
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
