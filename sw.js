/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/12/高雅创作/index.html","0400072a4062a47f3584117a4b8a160f"],["/2023/12/23/素晴らしき日々/index.html","2d2f175c5316131600ad7e9eb0f72bac"],["/2024/04/29/markdown-syntax/index.html","ce43f80a55c5d7683078939a959c76b5"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","c4af59326e9ebbe14a43457ce2066cd2"],["/2024/05/05/PyTorch深度学习/index.html","58aaf9e2aee58511809aebee2d5cdfe5"],["/2024/05/06/python图像处理/index.html","e3e2e2ed85a9b7e2a7882f015d780fae"],["/2024/05/08/the-tour-of-cpp/index.html","849690ac1a0562fcba916133b8d7c5b2"],["/2024/05/19/生活在树上/index.html","36b094ec54404f27eb1e4f0acf0665b2"],["/2024/05/23/vim-syntax/index.html","b53ae657b684cdf2968af91403fb8de7"],["/2024/05/25/正则表达式/index.html","969d26180608481e52579c5045149f92"],["/2024/05/26/diffusion-model/index.html","aadf2c81bd5d0c48bebae0e5778f9654"],["/2024/05/28/user-malloc/index.html","040061ddc065a250943c20d914b6a366"],["/2024/06/05/状态压缩dp/index.html","8ea423f3528764b2380d13f8936abcbc"],["/2024/06/10/STL/index.html","247755bd203bb072c60798f7ebe6e996"],["/2024/06/30/picture-format/index.html","7a71c6f5684d2e5aabf5996db0402d9a"],["/2024/08/17/GAMES101-Assignment7/index.html","ec360c3eeb43ed9c8f6a9df5d7aea58a"],["/2024/08/18/cpp-thread/index.html","ddc84cd6f2e46b76efdf64fc0eff704d"],["/2024/09/06/ArdiFan/index.html","32535ab7de482240141281cee53d5abd"],["/404.html","9098250f9b10c5e709b7589540c47130"],["/about/index.html","b073d85953505948b0422bdc0ac93ce2"],["/archives/2020/04/index.html","d42fe85bc2df7f480b641e2f724343c0"],["/archives/2020/index.html","e69b8d34f7e14950d07f9b2e8fbaa62d"],["/archives/2023/12/index.html","3a211e50e3a6e1dd73f029d65ae2d470"],["/archives/2023/index.html","8c63083bbc183280544a2f29b9db8eed"],["/archives/2024/04/index.html","0974d50d0e4a0f0a7032fbdb013f8f9b"],["/archives/2024/05/index.html","1f681379dae81f04f49d18c01d776499"],["/archives/2024/06/index.html","b296d907f32d7822f90bde760ca50002"],["/archives/2024/08/index.html","63b7775c7f03aeba4b62bd18d2e10d20"],["/archives/2024/09/index.html","8197416feed13ff446f4c1a22b034d20"],["/archives/2024/index.html","fc8d6f57b815ff8d7f17a1d0fa643be0"],["/archives/2024/page/2/index.html","dfe1e78f5ef8e0e679a534ab5679e98e"],["/archives/index.html","f93d34f6b9e4b1dba669065850d3801b"],["/archives/page/2/index.html","cf14bb6b6c8cdb7c4a1c8dad8439e79d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","78b7dc50a1041e00f28bbcae80ed2935"],["/categories/CG/index.html","5de173a4d7c3a8aa7be0fed85b6c772a"],["/categories/cpp/index.html","7149a323f84554319a28b6867d89dd2a"],["/categories/index.html","a035e8006c2f0fe7db51655837f65e45"],["/categories/java/index.html","9eb9c32a77e7f6926a37d04b9fa1be1f"],["/categories/markdown/index.html","e778b32f0cbd250cc8a04824d58c9551"],["/categories/python/index.html","6efff940a28236bbeb75ba4761fd6d1c"],["/categories/vim/index.html","af1663bed23b79d7de17482bddcc6bc3"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","8d2cccb6bf7f0776aba3deaa3749c112"],["/index.html","9b3bb0d40390f33f471f146b1ddddb0b"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","3940b9ebd69548ab4f1cedf4068ab52c"],["/sw-register.js","6bdf914c49bb1a7567d5cbd3ba755edd"],["/tags/Android/index.html","ec6874196cfc106bdc0daf35f75f9343"],["/tags/Arduino/index.html","781b3fe235de5b5dd8dd3ee1d6359de0"],["/tags/OS/index.html","47fa0816a7badf43c6bc19249dc7117e"],["/tags/index.html","a237e04f074a9082808bfaedc374c11d"],["/tags/刷题/index.html","b1ecaea17d342e7014d16fcc91ca273c"],["/tags/前端/index.html","a782a7aaea7f8968022a26b360a7e5c9"],["/tags/多线程/index.html","4c9b6dce10655970dc226ba08c3b42b5"],["/tags/数字图像处理/index.html","89ce81362020fe0f853aa50f4e04a9b9"],["/tags/数学/index.html","561abe3bebda8f6fa2a781c539283a1a"],["/tags/文本编辑器/index.html","d59b3a63db11b2c079f654a05cf4ec17"],["/tags/深度学习/index.html","1743b5b8056a3219fe298f1fb0b95296"],["/tags/渲染/index.html","46b11c504b2a7f431fa011c105065609"],["/tags/算法/index.html","136caa448728a338c6a1c1f8291c1d18"],["/tags/语法/index.html","b9c9031caa720e70216d9eb3c5765744"],["/tags/黄油/index.html","b89ebd629c2464792061c118e5fb6bb7"]];
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
