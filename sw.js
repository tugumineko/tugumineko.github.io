/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/12/高雅创作/index.html","94cd751c43cf3623639a2d40c16baf59"],["/2023/12/23/素晴らしき日々/index.html","765b557f2f47564fff38f0a355e84276"],["/2024/04/29/markdown-syntax/index.html","332d22052abfb8399875a09ea53e32e2"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","963a11fabbde7cb319734ed496bb69cc"],["/2024/05/05/PyTorch深度学习/index.html","c35d843b8ff6954d4502f3d9a5a2f3f0"],["/2024/05/06/python图像处理/index.html","daa50c76b3492ce9b43dc2492dbaeb4f"],["/2024/05/08/the-tour-of-cpp/index.html","d0a4cbe00cfebeb5e68403b8a1d6e6ac"],["/2024/05/19/生活在树上/index.html","266fc67c8354a22f4720d7dbb91c71c5"],["/2024/05/23/vim-syntax/index.html","aaecc77a055908c9914a0cb0bb66b61e"],["/2024/05/25/正则表达式/index.html","b39d3ee62816293ac2f1b9deb6e5133d"],["/2024/05/26/diffusion-model/index.html","5bfa36ece56c5eee2355f26481fe8a21"],["/2024/05/28/user-malloc/index.html","5cd5684e1333ea90915d64581e90620c"],["/2024/06/05/状态压缩dp/index.html","2469aa181412ab2c31e2682be7ba9c84"],["/2024/06/10/STL/index.html","7961e3782fa9e45da90ecdec423face6"],["/2024/06/30/picture-format/index.html","572a08e14f99dd78a4bb945cc7101cb6"],["/2024/08/17/GAMES101-Assignment7/index.html","e3f88401caba6f529e814f8d25bfca66"],["/2024/08/18/cpp-thread/index.html","2a404728e31c35fcb874571ef9ecaea1"],["/404.html","c33a9eac02ea846a7afde16ddff5b8b1"],["/about/index.html","f21b3feb3a6f6c72e946a5dcade085bc"],["/archives/2020/04/index.html","92a54f6d79cab7df32054155357220a9"],["/archives/2020/index.html","18bbd862aebd04dcb9a6e565b4c576b4"],["/archives/2023/12/index.html","a417b3df8039eb9741d4acb10513f03d"],["/archives/2023/index.html","24e9da6b15cf95c067444bad409dcbfa"],["/archives/2024/04/index.html","512717f9a6192d3524347bc9baaec736"],["/archives/2024/05/index.html","1edd18c89eb5b5071b152af503aaaefb"],["/archives/2024/06/index.html","1097b22300af08609961266b0f0a0ed7"],["/archives/2024/08/index.html","84dfaae4eab7aed8724ad22ca8b6d142"],["/archives/2024/index.html","6f1fe73bcc69c0e5d180ae1aa9163757"],["/archives/2024/page/2/index.html","cd4459008846c6ff49328504f8537588"],["/archives/index.html","76ac55951c0e1689c3f85bedd18e111e"],["/archives/page/2/index.html","fe68f0e6de979b2ad5d3d717caf808f1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","99474ea307efd11a44b27152ed084938"],["/categories/CG/index.html","278ccbeec55c4d0cb6f84fae54ee2487"],["/categories/cpp/index.html","e021fd665c0995f284bf8f6bdd4d3abc"],["/categories/index.html","325de46b47123b33e987b523fad3ed05"],["/categories/markdown/index.html","15549d70128315022505b79193ec801d"],["/categories/python/index.html","d9ddc757f375ad5780fe5c916103f8cd"],["/categories/vim/index.html","0923d8afa50565a90323a265d4c2dfb1"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","1659ef22349f56eb42aea56fb04762f1"],["/index.html","374d32fbe0ba953aa6f8df67c3e6f387"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","4ce4533a71144b88255c5eee47e971a1"],["/sw-register.js","4f766ae9e6d0bf0ab8d7a1cceb5b41c4"],["/tags/OS/index.html","56b5c264a8eb3e0add3dc444a3caa6a8"],["/tags/index.html","0dff2f1e1c0e0590bebc8a2ade95f90a"],["/tags/刷题/index.html","49222acb9a788de9833613b32034d661"],["/tags/前端/index.html","f3fe3dcffc03ac8e64e060cc7d87d830"],["/tags/多线程/index.html","072760273f9ef48cd778cd61e2ea320c"],["/tags/数字图像处理/index.html","ac86f3df1caed5af4dd1b957563f5ede"],["/tags/数学/index.html","f0b1e91b79e5c04c2d4752933bf724d6"],["/tags/文本编辑器/index.html","7e261e64d86e49360a87c0da0d2e2daa"],["/tags/深度学习/index.html","1ec665b6f184e8415bcbd55e6f289c18"],["/tags/渲染/index.html","e7ae9c8aca018a7f1540e47e30edd45f"],["/tags/算法/index.html","b4938165f2b240414b1844f203056a62"],["/tags/语法/index.html","9b876302580c3be5eb3dbcb578541c37"],["/tags/黄油/index.html","6995b1c30aba95e4f1454bbfe0256f7f"]];
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
