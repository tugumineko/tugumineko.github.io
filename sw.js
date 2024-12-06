/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","4617b6c497ff5f48bdb70d78e90c46b1"],["/2024/04/29/markdown-syntax/index.html","85b73b9eb2de252f6a305a9d376c1145"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","a16b88b5dfb6657302410bbfc7fc1fd6"],["/2024/05/05/PyTorch深度学习/index.html","ace267d18127e71c54f006431d378e69"],["/2024/05/06/python图像处理/index.html","e4ca33e61277ab09ae40e5af78946635"],["/2024/05/08/the-tour-of-cpp/index.html","05879fa5008a6c177cb0c929525405a8"],["/2024/05/19/生活在树上/index.html","b696b1c8597e4a3f31df2ed1e757240b"],["/2024/05/23/vim-syntax/index.html","37c56f167483e5784e4744bdae50d23d"],["/2024/05/25/正则表达式/index.html","9a4f9622dd1352c3125af00a8f924357"],["/2024/05/26/diffusion-model/index.html","b6c7c8c37e98ab48863a4e829ad69ba5"],["/2024/05/28/user-malloc/index.html","b8792abe4371137e0ebd53aa4cb6d149"],["/2024/06/05/状态压缩dp/index.html","3ade59e5a4f66aa10d6db3e179262b22"],["/2024/06/10/STL/index.html","44f0d3fe33d981a82c88e01f57634e14"],["/2024/06/30/picture-format/index.html","be22ff542062c7bd5fce862dfdf2da7c"],["/2024/08/17/GAMES101-Assignment7/index.html","e8b5017217c4092efed0995db3b4f0b9"],["/2024/08/18/cpp-thread/index.html","56d60b59d38abf577718c032f3246f0f"],["/2024/09/06/ArdiFan/index.html","aadbae2eda440c0e7a9ed56d17d1f80b"],["/2024/10/22/TA百人计划笔记/index.html","e188e5c4e38d7e9a1931a2fa1be8fca8"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","073fef0c7f5ce5a34e72143fe8623ab6"],["/2024/11/05/cv-concepts/index.html","84d91ba5485b2cbc90e23640fb626f22"],["/2024/11/11/softras-environment/index.html","5bc1a20fb0da5120507e0a7b2792fe3d"],["/2024/11/25/3dgs-sketch/index.html","f822e85d5aa158441d760e9121831d35"],["/2024/12/02/mini-splatting/index.html","e521ec8ec6f97268005248802471db48"],["/2024/12/06/Quadratic-form/index.html","f942ded3d6313ccbb64a74c575db76a6"],["/404.html","5ce95c12432dc88a421fb59a10b1c46b"],["/about/index.html","e29242546bad13d975ad7150d3e8fd07"],["/archives/2023/12/index.html","708473903058362d30f3dc9eec147633"],["/archives/2023/index.html","b929921573fe4f379740908aa2a8fd2b"],["/archives/2024/04/index.html","ec9570e2ce07ee025ccb80143fef848a"],["/archives/2024/05/index.html","3a5ca4a6a8e8d6cd69c32e43906a91de"],["/archives/2024/06/index.html","2b64932ea82113118bafd1477d0fd29f"],["/archives/2024/08/index.html","43f993460b2d728d536bcc96b9d737c8"],["/archives/2024/09/index.html","d5e319db9607a0eba675ab8aab9cb161"],["/archives/2024/10/index.html","60136816db579896a5381e8fb75b3284"],["/archives/2024/11/index.html","016a8d4e9656e839517f5b9b3c9c133c"],["/archives/2024/12/index.html","83289d62281f0e53398e91d958117157"],["/archives/2024/index.html","45492ccffa401e289a38cbd8ecfb99e7"],["/archives/2024/page/2/index.html","c77a8a206d9d4effda7d34c7537b4096"],["/archives/2024/page/3/index.html","6dd3b2ef5a5ce32385b45fba575f7d48"],["/archives/index.html","e9656ccf7df8b33a771d85383ff0c5cf"],["/archives/page/2/index.html","3a8fd899301718218a50859f23db029e"],["/archives/page/3/index.html","dad4c0e4cce8524d0c4af2453937df17"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","be34a97704db53b40d40901f4149408c"],["/categories/C/index.html","e54b4163471970aefc61730a64def849"],["/categories/CG/index.html","d0b1f59b78ae429d6af83a35a12940a3"],["/categories/cpp/index.html","114a162ffda67782bfd30d32bc14963e"],["/categories/cuda/index.html","2eab1b8c78538b74db201ca7cf3d12d8"],["/categories/cv/index.html","0f151b7174eebc9958644bdc8758b062"],["/categories/index.html","64f3e3105c6fe648ef838dcb0e1fa11f"],["/categories/java/index.html","f7d0d53e35795df60b475546b5f4354f"],["/categories/markdown/index.html","bbf573b680904118a1d712ba15579125"],["/categories/python/index.html","ec60f11cdf5237fd10271b55c1ea340f"],["/categories/vim/index.html","b411e19d55aa88c51732052df9826e75"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","0d2cefb36ee2a3634d7807229d7c8dd5"],["/index.html","6883a7b281a13ee8dd9926ee13a12488"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","d5c0c0b98666e215c7095b4650ec3fa1"],["/page/3/index.html","7bc7863c0e69e8007b85e46fed8f0e69"],["/sw-register.js","9217a5cc028f2063d487f1fa3c0dec1b"],["/tags/3dgs/index.html","0f309e575c08556e63bf8228272a0aac"],["/tags/Android/index.html","ce59635e0b6f152577aacbb6ad29552d"],["/tags/Arduino/index.html","12998e48c329fea506c17251b07d8b36"],["/tags/OS/index.html","00adc0d674b2b0be2e7587daef7f9fe7"],["/tags/index.html","59c5c9436821fd2a30cc3eac0bd98af9"],["/tags/刷题/index.html","fa58dcee93bfdf9e115557cf7171f5d1"],["/tags/前端/index.html","09670324b3906b1d4f361de402bc9f5a"],["/tags/多线程/index.html","65bb4a4c04d86ff932bcb4e56f783b6e"],["/tags/数字图像处理/index.html","243eb8cc7e1e5db8c44056c26a104409"],["/tags/数学/index.html","0b0e3811f01e6ec26ca4a7aefd31a01c"],["/tags/文本编辑器/index.html","b5cc2a741df96189a09d5c3a9e4bd82a"],["/tags/深度学习/index.html","59f426b31bf1942205018c3afae32c74"],["/tags/渲染/index.html","033392a256b8e8991fb86f8669134a41"],["/tags/游戏/index.html","6e60b1c0dfb7b17c9958447710e2a898"],["/tags/算法/index.html","9dcc9c2da24546df5f81b31ca3fb8aba"],["/tags/语法/index.html","3cd9406e64d712136f347dbce7e18567"],["/tags/黄油/index.html","ad207be22765249aea91a413146c8a7b"]];
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
