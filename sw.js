/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","3bbd5cbba79c5a2e7f3a1bf5bf08ba32"],["/2024/04/29/markdown-syntax/index.html","662d0f2d6db4c722c36ba7f5dca3488d"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","b16a6cd678346198870effff7448312b"],["/2024/05/05/PyTorch深度学习/index.html","f88c5e6c0c470855a4c4a6740482cfaa"],["/2024/05/06/python图像处理/index.html","de851a0f638d8a322536146b3e2b4bc6"],["/2024/05/08/the-tour-of-cpp/index.html","a7a8eae53947ca7992bf1cdff108dafc"],["/2024/05/19/生活在树上/index.html","d71ddee37eed48e32096ace69ed2c79d"],["/2024/05/23/vim-syntax/index.html","3651be2f115c488ba816556411569fb7"],["/2024/05/25/正则表达式/index.html","1da9c60743735167783547cc5e154efa"],["/2024/05/26/diffusion-model/index.html","94d72eeec7f5fa3140ed512a5d758131"],["/2024/05/28/user-malloc/index.html","70c2cddb9f2a9491fc4a8b137174a977"],["/2024/06/05/状态压缩dp/index.html","a7720d1d74b59e0fda7f05b31bd58b6a"],["/2024/06/10/STL/index.html","b201ded0e9e51eca02736b2013e69e4f"],["/2024/06/30/picture-format/index.html","46a3b7a6accc18a896d7e117ab85b211"],["/2024/08/17/GAMES101-Assignment7/index.html","d8370d4d2b65bcce133fc3987dfd17c5"],["/2024/08/18/cpp-thread/index.html","8780ffadbc5ecbc7244b61005198cab6"],["/2024/09/06/ArdiFan/index.html","746d1ce08108c5ff03e8dfca8c7dde76"],["/2024/10/22/TA百人计划笔记/index.html","8a75e75fad800b81270941548e831c9a"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","e3d3cf0d6683adefb95bee5cc35d46f6"],["/2024/11/05/cv-concepts/index.html","4a73da77bf8bc6fc5ee7bb06aa70e76e"],["/2024/11/11/softras-environment/index.html","7ad9f280e50b94effd4d51491b0227a0"],["/2024/11/25/3dgs-sketch/index.html","c91715580214fd7d4a8023219c0379c7"],["/2024/12/02/mini-splatting/index.html","7c46c6183f210b584c9a272544c89a8b"],["/404.html","dd880562584d5bbd4847b240f7215871"],["/about/index.html","81d3395339724b9a07084a5d5b3df8c7"],["/archives/2023/12/index.html","7fcdc7afe5796d4c87a38aea7ec617c3"],["/archives/2023/index.html","ae33baf3ffde9525cc9623fcd35d70ba"],["/archives/2024/04/index.html","bac10f51547b865b1ae6f29608cc6946"],["/archives/2024/05/index.html","c7a545ccc526d8252c0ef257730d9ca9"],["/archives/2024/06/index.html","31b4c22906c43598e089cb1a04c78a2b"],["/archives/2024/08/index.html","96a70542274e8cb70b9988793e865a80"],["/archives/2024/09/index.html","14f8e854a386922dba4eac5972e94403"],["/archives/2024/10/index.html","fe547a393993fa80248affb5e0d6aa84"],["/archives/2024/11/index.html","5764becd85a296cec836cbfabdc2f345"],["/archives/2024/12/index.html","b2cc2eb261610dfe599785eaf79320ff"],["/archives/2024/index.html","85529acec054d956d4c6bf068f24ccd3"],["/archives/2024/page/2/index.html","d05aa535ffa3a99669d5e59e2ee894a3"],["/archives/2024/page/3/index.html","8a8c539d417a7e76b7c0b6df356e8dd6"],["/archives/index.html","a06c87ffa230ad95c8e2674422685109"],["/archives/page/2/index.html","c2cc65088296099aca638e1b43657ae1"],["/archives/page/3/index.html","a4a3831c2f7ce90f3121eeb211895991"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","2b3bda2ac17653075d0b6d5dd87e2152"],["/categories/C/index.html","9e60f575ad0ba4c07141ddd5b149b4d3"],["/categories/CG/index.html","de2b380c2013b260e4ca2f1fd6bfad5b"],["/categories/cpp/index.html","2d8df6b70860bbbebf7b2bf32730c8dd"],["/categories/cuda/index.html","47bb0180333ebc9c69843517e8bba761"],["/categories/cv/index.html","5b3cc79107f230d49ac1c86b7c6e6845"],["/categories/index.html","df96ddbaaea515b6892942cafc68bdac"],["/categories/java/index.html","9cf0aedbd11a0d474a06a15f8aef591f"],["/categories/markdown/index.html","36c3a666efb05025cec8dad5a019eb49"],["/categories/python/index.html","ae2168a2416e6ca2e37fd4bf9bd72098"],["/categories/vim/index.html","d64c9c76f4b05d6aee47258e84f7cc27"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","a5fa7155eaf9cd80586731da839db15e"],["/index.html","ca1d79b82c4574b4774561de103db80a"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","4118326de1369dca189c5277ed319d92"],["/page/3/index.html","a87fb7e634d56dd73bfdf6ff384be655"],["/sw-register.js","e36ca125eb6643fe3c1d5a8c9b3e13d4"],["/tags/3dgs/index.html","6acec43b1895fa7ef5dbaf8401f2dc8b"],["/tags/Android/index.html","499d6b3b383c80baa8e82d46cfef5e63"],["/tags/Arduino/index.html","a0721a8bc111a7aa5a473bf4deb3c02c"],["/tags/OS/index.html","a126dfa6b7905c826a51e031268c0034"],["/tags/index.html","c725bf7a0f4fa98bf44e603b592f7946"],["/tags/刷题/index.html","ba8198ba4fac0344cfc69d16f7a4e39f"],["/tags/前端/index.html","e6543195efc2c0cb4f20f5ae79a658e5"],["/tags/多线程/index.html","692076a8bafa548cb11bc6d714c2434a"],["/tags/数字图像处理/index.html","e20bb647ce0577e83d1aaa567fe47790"],["/tags/数学/index.html","91d64a5e81a914077125dfd5dfc0d114"],["/tags/文本编辑器/index.html","d43eda11cb1ec964c1e9f1626a1eb8fe"],["/tags/深度学习/index.html","c6a1cd255df8058f23ddfc9be94a3a16"],["/tags/渲染/index.html","dbf9967eca97b7386b2580c63d0ed347"],["/tags/游戏/index.html","a85c8bcd88c0c9dcd5ad3d81696616fd"],["/tags/算法/index.html","f447b3129c5a754aa3023f83f92f7300"],["/tags/语法/index.html","9da667d9541366adfaf4cb6e4c165fc3"],["/tags/黄油/index.html","cb3919cb6793a8e56f81ad94cd4e4b9e"]];
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
