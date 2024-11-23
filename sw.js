/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","9cb46c16af19f7aec3dd66589cf9276c"],["/2024/04/29/markdown-syntax/index.html","92a717902c8138cabe6fbdc950634792"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","e964d5a9f787fd74092746daeaa1d347"],["/2024/05/05/PyTorch深度学习/index.html","98a61525c5d804d0aab2cf4839ec397d"],["/2024/05/06/python图像处理/index.html","1a6daa3e2900368126987ac94e79c90c"],["/2024/05/08/the-tour-of-cpp/index.html","b40e63626e43b41108a6bb926424d1b7"],["/2024/05/19/生活在树上/index.html","b3a94f8dbc3786afb8a899e8aa48bd64"],["/2024/05/23/vim-syntax/index.html","bb42873cfdeb1997009afe0f78b8a1b1"],["/2024/05/25/正则表达式/index.html","4ba4e4f49375b52cb3e0bc739cb7f5fa"],["/2024/05/26/diffusion-model/index.html","b45b8499a3ba13b35f59f8a58319facf"],["/2024/05/28/user-malloc/index.html","861be75a9a11aaa2cf8f775d3b5491b0"],["/2024/06/05/状态压缩dp/index.html","28b3d328c8c881c3bd78bd71ece8c76b"],["/2024/06/10/STL/index.html","028ca62811fbb1dedb73f29d4e5b313d"],["/2024/06/30/picture-format/index.html","af83583f8a0333b0ce3fc5454ebefc17"],["/2024/08/17/GAMES101-Assignment7/index.html","effce15c60ba86b1657b6824d5a0ed2d"],["/2024/08/18/cpp-thread/index.html","1c770bfb8d5343dc6e5af15586ea5cf4"],["/2024/09/06/ArdiFan/index.html","7a7d948ed69cfec5904178c18f33d419"],["/2024/10/22/TA百人计划笔记/index.html","1fbcabf40251ff17c17b08b4c54525d9"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","48436a55c13032c45128e8d42ff8453e"],["/2024/11/05/cv-concepts/index.html","8d26094e1f188082602b4239c5717624"],["/2024/11/11/softras-environment/index.html","5d6189d6f64750f3f98368b6021a0805"],["/404.html","e2013df53e5f895d4c4f23da580d9e51"],["/about/index.html","9af1c4b582b9c302ef1b0a37aa91b81c"],["/archives/2023/12/index.html","3c8de862eccfc3fe32e49a3418275332"],["/archives/2023/index.html","b50ba72326606247472733c02ca2afec"],["/archives/2024/04/index.html","082cc8878c0999d3d24569c100241e80"],["/archives/2024/05/index.html","01a8e7a6099dbd72743cb663d690b1aa"],["/archives/2024/06/index.html","589b51fb67ea2e5637a863ed134db9bb"],["/archives/2024/08/index.html","e742afbf0788287bb67a90538b5ee627"],["/archives/2024/09/index.html","bbfb5c939b9edf01b1c092d587073040"],["/archives/2024/10/index.html","1589cc7ec68df54f496aac6bc36b8fdd"],["/archives/2024/11/index.html","9cd29c7d59d1203a5804c999cbfb38fa"],["/archives/2024/index.html","8556cb860467b2eef88d233ece817b17"],["/archives/2024/page/2/index.html","49cba4faf4aefa4b5da2d76b9c88c808"],["/archives/index.html","6ae14d24b18e4c6b30981ac40bbbe579"],["/archives/page/2/index.html","cb24f9b1cbd11ce68639c336503d025e"],["/archives/page/3/index.html","b9bfc370a9b0371c280ce4fae79d8ca3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","9aabb9712b80a620a95d0de287960cf3"],["/categories/CG/index.html","c75c730c28bce98a7917b4526760510f"],["/categories/cpp/index.html","1cec8268900ab6daf1c11a81d5110b9b"],["/categories/cuda/index.html","7ad1f7a09d1176e61fe1320a365e9aee"],["/categories/cv/index.html","555db83c5e35a858834e58f2997cccd3"],["/categories/index.html","58ffaf71b7e0613b84219f5c8edc394c"],["/categories/java/index.html","f9b30d85ec84cb9159e9a874309daf44"],["/categories/markdown/index.html","dbd1f32feab3d011bf07b8772b3fa51e"],["/categories/python/index.html","6339ef91e47dba1ab577ff71a355eb06"],["/categories/vim/index.html","35d17b9254ffd1c206cfa20e8b086f5c"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","ca0234b91f0e2d2c18b29d95691a8e98"],["/index.html","8889c7b6f559a7f2ddb3229688f6f843"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","825abb2c49cf4d81ab3ea7277092c950"],["/page/3/index.html","4ff99d37e1e1b512fe7a014b0d90fb26"],["/sw-register.js","cd735b9e2d9661bcaa6197cd812e57f6"],["/tags/3dgs/index.html","ad49a4e044b4fffd389737b5c6593de7"],["/tags/Android/index.html","8691d1261f01f0b89d88da14bcf91ff0"],["/tags/Arduino/index.html","cbb6bfe611e9b2158e9d567c982f8a43"],["/tags/OS/index.html","62a344747f25f04e96ab284e4aaded3a"],["/tags/index.html","045033005fd65f5141d61c59626dc105"],["/tags/刷题/index.html","1fa48d66cd667bfb29da3b36cbaa8567"],["/tags/前端/index.html","cbfed9abf6bc9128f88999bfa32a6744"],["/tags/多线程/index.html","108ff3a27a618377755d4a9e7e9d14d9"],["/tags/数字图像处理/index.html","6dc813befd8aa48ef23b1cb8b25248bf"],["/tags/数学/index.html","1ad693eee73192288433dbe6fb1e1c65"],["/tags/文本编辑器/index.html","fa201933d3ade6b618a7c886e1bb4ce6"],["/tags/深度学习/index.html","48371f173a0dadf1691802517aa4cf26"],["/tags/渲染/index.html","2869fcd87c75227aabd774afddc32fb7"],["/tags/游戏/index.html","9a5cec10d3d57135ab850abd07c2508a"],["/tags/算法/index.html","d4c72f70f85e2eabd52ee0b3de323830"],["/tags/语法/index.html","f805d25e131dd216106a01ac924733e1"],["/tags/黄油/index.html","92148cb010d7eb2e0d2bf5ac2626b6c4"]];
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
