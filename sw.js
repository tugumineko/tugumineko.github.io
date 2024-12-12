/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","4d581cc4a7e2eb16c639abd9aec74ae2"],["/2024/04/29/markdown-syntax/index.html","6b69ec514d1ed893cc1e98a1614d09c1"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","a0c3e02e5ff98b5c55846645015451b2"],["/2024/05/05/PyTorch深度学习/index.html","a1dc0260c5641f5c02c8038041ac7172"],["/2024/05/06/python图像处理/index.html","413a50644d9af4ebfb3d174209995185"],["/2024/05/08/the-tour-of-cpp/index.html","6ea91a9bc706b53259218652ca40109f"],["/2024/05/19/生活在树上/index.html","ea2165d88f52e0ca17389b17cff26438"],["/2024/05/23/vim-syntax/index.html","e823a3910d7113457f3f13f46533445e"],["/2024/05/25/正则表达式/index.html","0599dd23567ee68659439b242a68f583"],["/2024/05/26/diffusion-model/index.html","f4202b9f7592779a7cbf2f43619d9119"],["/2024/05/28/user-malloc/index.html","4900d5edd30de6e71efa50e77af72b51"],["/2024/06/05/状态压缩dp/index.html","7ed37559af2f792381d5e740e26d94cb"],["/2024/06/10/STL/index.html","3cf564870703904abeeec963a8fbb6a8"],["/2024/06/30/picture-format/index.html","5f50a1be9c50c5d7dbf643bf47b8ee4a"],["/2024/08/17/GAMES101-Assignment7/index.html","b9eb069f9d1effba86b3b0940985b5c7"],["/2024/08/18/cpp-thread/index.html","bdcf0acd1345a5cd3e032f11abd42764"],["/2024/09/06/ArdiFan/index.html","3f46b4eac998ebf636f9d6edfa3bb8ea"],["/2024/10/22/TA百人计划笔记/index.html","f1fb3f27e0c9eacebc09fdfa443c2ae4"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","bd9a16d95e73f3c28d85282f9e490ef6"],["/2024/11/05/cv-concepts/index.html","f648dd5ee88a3691d7f74dd78364de52"],["/2024/11/11/softras-environment/index.html","44ef1239377eca2026d660146e041c14"],["/2024/11/25/3dgs-sketch/index.html","ed51a0c4b2fdec294c0be65743bd6026"],["/2024/12/02/mini-splatting2/index.html","819706d44ebdbfa0b905fe42265a9a19"],["/2024/12/06/Quadratic-form/index.html","e4d511cfe78805e801c23af25c97af37"],["/2024/12/10/eigenvector-and-determination/index.html","3c7a1e35970fa723ab8fc8640e14e042"],["/404.html","058456b7cb9aafbbaa3b68300c9e5cc0"],["/about/index.html","6ee5519cd94d751653ae1c86ceb66a4c"],["/archives/2023/12/index.html","cdf112f6a2b79171ac1d26e4eb61fda9"],["/archives/2023/index.html","7c8acda2c863fff8a0c53f656f5122a0"],["/archives/2024/04/index.html","381e7f36ad491799a8a69eea45e63efe"],["/archives/2024/05/index.html","1ea7580f8fe54ed5cff33d6063602aaf"],["/archives/2024/06/index.html","1cf02294154d53144430c1ca9a6f2e16"],["/archives/2024/08/index.html","a3e121b86e31ceee2c4ae8c1fdce62d3"],["/archives/2024/09/index.html","c9f6577722828e4b757a15610a1b2d25"],["/archives/2024/10/index.html","6b1d3932bbaf4d5c57b31776ab49a7b9"],["/archives/2024/11/index.html","7f21463d387060d4143aeff7994219ae"],["/archives/2024/12/index.html","193fd5cb2993cf630e0b40b02683c5bf"],["/archives/2024/index.html","0df0111f558f6ad46bfacc872c062533"],["/archives/2024/page/2/index.html","79e5feb8df0dc657213fc3c8c70a09fc"],["/archives/2024/page/3/index.html","aff0c08e58cec59d7e0084f1dacc0fce"],["/archives/index.html","9f251ac5bd48c373613499c57f018ac3"],["/archives/page/2/index.html","2eee92409ea89b70da67f4c0c6896259"],["/archives/page/3/index.html","30425233f76bf5e6c53518bfdd19e95e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","52fc5ceedeed85abea10035e278747a8"],["/categories/C/index.html","b57d186751cee135669f59669d1bee12"],["/categories/CG/index.html","734f9bc5abe99bfea029e9ee4f60437f"],["/categories/cpp/index.html","c4c7d3bfed0e57bb431ea5be2a810784"],["/categories/cuda/index.html","6c67a41c65b7c10e35f1bacdd7735e94"],["/categories/cv/index.html","673b25f76670006620468aacbb1040b0"],["/categories/index.html","efbdb8a3c1b3b78adf8ea9131bf605e3"],["/categories/java/index.html","90ea1e321a09f61f13a6a9fdfd60f643"],["/categories/markdown/index.html","fc5c2dee61fb4d28a88367d6f3d39426"],["/categories/python/index.html","8735f316f05864bee51e091db1738a3d"],["/categories/vim/index.html","88eb338b1fb2458bd4d41d07f25fa312"],["/categories/线性代数/index.html","22222249a5b67679fbefc0e32af29d80"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","537d11445003a3185cb3096e4eae87e7"],["/index.html","80d5f5d607d64c26a379e6a9d228a245"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","3cfea82e45a8d9f12829c6b4ab601f9c"],["/page/3/index.html","8fb3849d0ced1ea6e0604a1014362bfa"],["/sw-register.js","0db2a613305fdc60f53f6056108f4871"],["/tags/3dgs/index.html","1106449e566aed4735f59a503a1332e4"],["/tags/Android/index.html","0fb30d933f1ccdc117e30d595e8d6f1c"],["/tags/Arduino/index.html","ceed15ac834bcbd9f5691bfc8011f366"],["/tags/OS/index.html","bae7f5465618940b4bd55e22ecfd364d"],["/tags/index.html","71a5357408b2f58b800b076aff3285f9"],["/tags/刷题/index.html","f47383ffc8c65ee799e989aae1553d30"],["/tags/前端/index.html","f09a9e053571c30ddcde64bae0ff5304"],["/tags/多线程/index.html","2a9e6f9cc3a7937bea52cce5e890978d"],["/tags/数字图像处理/index.html","0ee8b5a275ece1ae874252050b3ce6e4"],["/tags/数学/index.html","375ccb8f61c5d63012a1dcb6c7312bd9"],["/tags/文本编辑器/index.html","efb0b8cdaf7052f33d2aede113355b5c"],["/tags/深度学习/index.html","5713f8e2739437582b0bc3d3e7137cb0"],["/tags/渲染/index.html","6f676f1a3c984e1b3c49aeaca39cd2ca"],["/tags/游戏/index.html","d366d18b7dc118695932ef108c0a8f2d"],["/tags/算法/index.html","c16df5b4c5d9cb6a6c3618b4ff7184e0"],["/tags/语法/index.html","e7c071f69a44c0f8a3c7a73be522439a"],["/tags/黄油/index.html","ff4eb49a2358bceaaff493b16c66eed3"]];
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
