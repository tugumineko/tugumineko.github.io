/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","b0646f24f284095b40d69332deeee2b4"],["/2024/04/29/markdown-syntax/index.html","b5522be988489fd88449b35db6344edc"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","0f8a9645250dd12eb4c8c982b856ffc1"],["/2024/05/05/PyTorch深度学习/index.html","cae36a77e9c742ba0b789e0669ab0763"],["/2024/05/06/python图像处理/index.html","203d877407a81f566eacf92ffa8efc21"],["/2024/05/08/the-tour-of-cpp/index.html","dd0ddacdd83882a37767349556d28561"],["/2024/05/19/生活在树上/index.html","7bc6859fc5e634c1a7a18118ae4b6527"],["/2024/05/23/vim-syntax/index.html","8a9d87ca7c33dbdf27d6ca4c8efdd2aa"],["/2024/05/25/正则表达式/index.html","f16ca49ed078cc30593e5885d505742d"],["/2024/05/26/diffusion-model/index.html","1d193d47e9998cd6ea7c520b336c961a"],["/2024/05/28/user-malloc/index.html","eea0821c4e927b23c78dceb252ed6767"],["/2024/06/05/状态压缩dp/index.html","65f49c7d6a3acc018c8bc904b0e27b52"],["/2024/06/10/STL/index.html","6ec223e908c69a840de23406308250a5"],["/2024/06/30/picture-format/index.html","fda52138421c8fa2def7c069deda0989"],["/2024/08/17/GAMES101-Assignment7/index.html","05abf2d85e50b3b53e544ba9cabf5b06"],["/2024/08/18/cpp-thread/index.html","a0552effbc31ea1376b966c6a6de5784"],["/2024/09/06/ArdiFan/index.html","4e5e6e5125a7825836879ba6ed742af1"],["/2024/10/22/TA百人计划笔记/index.html","4ac9b4849a2f1ac27ea5c33850e42957"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","21b46ec7f94b526a798d397dce0dc7cd"],["/2024/11/05/cv-concepts/index.html","173f47e3a59dab3ebfae977cfab47425"],["/2024/11/11/softras-environment/index.html","618aef7a7f3f44e0839d55519f20d4b5"],["/2024/11/25/3dgs-sketch/index.html","6c1e290d96e3cd6f9323d972150d20b6"],["/2024/12/02/mini-splatting/index.html","a6255ff2e64f465195963651fb952e2e"],["/2024/12/06/Quadratic-form/index.html","5f163a7241b300facd899330ae3e5783"],["/404.html","7f64b5c0e6081a348d314aecd6e86807"],["/about/index.html","8092b2ba188e4ad106c382d8b4ccbf23"],["/archives/2023/12/index.html","3dac8e1f2d494e83bce1b5ecadff66cd"],["/archives/2023/index.html","4d33a24a0c6af2165f7227b66552249c"],["/archives/2024/04/index.html","2dcd8327947b375a917d118946782c22"],["/archives/2024/05/index.html","c13fd86f61107a8bfb4ad28a4728bb1b"],["/archives/2024/06/index.html","5c291bba14bd90d50335fdba085273cc"],["/archives/2024/08/index.html","ee6ef599cd51e5a4af1875bc2d6f868b"],["/archives/2024/09/index.html","22e84e0ae74ec9401a591cc42d828513"],["/archives/2024/10/index.html","a00c058b744f757746558164d025711e"],["/archives/2024/11/index.html","dca1ab6d5bb04312c73a91257513492e"],["/archives/2024/12/index.html","1c230fef6cf5d04af38b83d6f12f8db6"],["/archives/2024/index.html","615cdc9c00813e3b5e9efced8f5313b9"],["/archives/2024/page/2/index.html","b9a0718f9d5aaa3f7f97cd510f71a7d6"],["/archives/2024/page/3/index.html","0df16003461cd12c33de47536e410c87"],["/archives/index.html","1ab51fd8aca9c28893e2242984245585"],["/archives/page/2/index.html","19e2babbc3460f415a1d22f7eb9535ce"],["/archives/page/3/index.html","2c0f2ba4aad36fc0503dc703ca714ddf"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","5ab745839aaea6c6bc3771d781c67285"],["/categories/C/index.html","eca8cc42564d9d0e635fabfb7650c317"],["/categories/CG/index.html","4cc800e130b165fbf7d5f0bd9de2a6d9"],["/categories/cpp/index.html","f2ebe783c318aa550ef411d9fd322a98"],["/categories/cuda/index.html","11080d162786304c34e483508540c605"],["/categories/cv/index.html","c3905983acd65c3c2950889d00892a64"],["/categories/index.html","adfcda449faefafadd4d101f95cbf60f"],["/categories/java/index.html","a1ab7eea768850fe384b691ebbd0fa96"],["/categories/markdown/index.html","edd78b534406235b2b190f0216f51df3"],["/categories/python/index.html","260ed460a3f1aba8d6e6bdbfd34767d2"],["/categories/vim/index.html","4b0df85bfe3fe3c2b138e76108549342"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","dbf47ac7c9eea42d22fc437e17823ab5"],["/index.html","ce83f8a5251e9170e461a744fecea348"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","2580bf0c9a1a2080a74b061d24d37959"],["/page/3/index.html","ab6abb0fc72e21be485131814a333c56"],["/sw-register.js","14e2516f4da02cb67f2ac4a35b0f3872"],["/tags/3dgs/index.html","512348bfaf95a9d8d14b20c2b4e1f36d"],["/tags/Android/index.html","b9111f3f41de0d156a54feb4860775de"],["/tags/Arduino/index.html","23f53388ff8d820f7abb6d7d34c5e209"],["/tags/OS/index.html","4271fc3de201fb51116ec4f30e4864a2"],["/tags/index.html","52e9c7f4c19614bf50c73118db20e29a"],["/tags/刷题/index.html","62a3d3fe68e08a3dccebbb8029f7bce7"],["/tags/前端/index.html","79c1358f45a4b7a852f5ff323f83c4fb"],["/tags/多线程/index.html","3dc4af5d16027aea5ee095bc5d6d9f5e"],["/tags/数字图像处理/index.html","8fffe7f6c870af83ba1335c329cfdc60"],["/tags/数学/index.html","4ab0665d0d18d79210ece54c0396149a"],["/tags/文本编辑器/index.html","4b814153f7bc01ad6346029f5c6d13d8"],["/tags/深度学习/index.html","aa8b4fac78443c57e8823c2248361e2f"],["/tags/渲染/index.html","30949f1549fdcb8b92203a448e0ec39b"],["/tags/游戏/index.html","7bcd39786688186800305c2d04b0094e"],["/tags/算法/index.html","1f603af31d66eb67faf3913a0e295b64"],["/tags/语法/index.html","216d01c5af3e8c3bbf97972cee785202"],["/tags/黄油/index.html","c8016b86c68d33f9c6bdcc708b4f8a77"]];
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
