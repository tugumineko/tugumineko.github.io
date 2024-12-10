/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","4a25c7d6f5a6a71fada75a843d2ecc24"],["/2024/04/29/markdown-syntax/index.html","e650b50d3d69acddb88db9a812ef3f3e"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","96e7272c71ad9f0e4fdf02d32faee62f"],["/2024/05/05/PyTorch深度学习/index.html","24a44a6dd8f8c17795359d8b99ca55c0"],["/2024/05/06/python图像处理/index.html","efe051fc78eeccb08fa02f1f8e55ceac"],["/2024/05/08/the-tour-of-cpp/index.html","9c64a2c30d963c083c72bef415ff92f7"],["/2024/05/19/生活在树上/index.html","fab09ac90818905b0eed72a275e63323"],["/2024/05/23/vim-syntax/index.html","e482d9d7c67aa76352e58e8ce7dd3726"],["/2024/05/25/正则表达式/index.html","0d4bb597476ee5e41d4a012672ca9c65"],["/2024/05/26/diffusion-model/index.html","5475f45ba2a371af20d6ea29d73a21b6"],["/2024/05/28/user-malloc/index.html","e12713a41646a46547a902178acf2f4c"],["/2024/06/05/状态压缩dp/index.html","38ef5d9b7a58499fc7946f3adc3df5de"],["/2024/06/10/STL/index.html","fb235e9411f476e66f4f9222ce92a7f9"],["/2024/06/30/picture-format/index.html","4ad08402511b574140f5382dc4701cff"],["/2024/08/17/GAMES101-Assignment7/index.html","47605558f12c57973dd9e62e142e54df"],["/2024/08/18/cpp-thread/index.html","6a3c1a872cb27e7428fe78c93df482bb"],["/2024/09/06/ArdiFan/index.html","dfe072bec94bdfb28413864f9041388a"],["/2024/10/22/TA百人计划笔记/index.html","0fe29468724da0089ffee00231089905"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","4d33a6ef7cb821c639e01b790234dc0c"],["/2024/11/05/cv-concepts/index.html","bd3f85b43cae8a5c4a83b721c2e73f44"],["/2024/11/11/softras-environment/index.html","1a046c29c042f769089a36a2552f3f22"],["/2024/11/25/3dgs-sketch/index.html","04969b08f1cbad257173a49c177088ad"],["/2024/12/02/mini-splatting/index.html","b94d2199eefa567befe4f7f5e52f1902"],["/2024/12/06/Quadratic-form/index.html","cb4743f09fc21d83e34d1dc529a8393f"],["/2024/12/10/eigenvector-and-determination/index.html","c0608cb1c28f61ab42a60fe0e610036d"],["/404.html","e7c825281226b0138bff3d6d5a9a3d28"],["/about/index.html","4526064332f3a23fc86ee04f7e05a8ab"],["/archives/2023/12/index.html","68d32d85ae31c3afaae108781f6b73c1"],["/archives/2023/index.html","4c4c265744b85a22fc5a5a1cd4959c9c"],["/archives/2024/04/index.html","0f3a74b3bbfff6c920d406c54ff0d79f"],["/archives/2024/05/index.html","140ea064ea3286b2c8c334988a5a5506"],["/archives/2024/06/index.html","08653b0ff8997cd6efd6c4ff807a5a01"],["/archives/2024/08/index.html","cb3edb15f0d2a199b4e773a7bda64c87"],["/archives/2024/09/index.html","e8aa43598264b6eebd4c0725d3693716"],["/archives/2024/10/index.html","0f1dc00febd9a06ee51ab4ebd55cca9e"],["/archives/2024/11/index.html","ad895ae09b5a950da5159e4862205b71"],["/archives/2024/12/index.html","8abab1e0fa0a9b38d92ec37a894e63be"],["/archives/2024/index.html","38beeb1836b1eda398c366b25621af9e"],["/archives/2024/page/2/index.html","dea3aa05d12eecc755064bc060cac432"],["/archives/2024/page/3/index.html","6d6b83e7346aeed9e03f5adc9f42f89b"],["/archives/index.html","754ccb7678864706194a88632a08a7dd"],["/archives/page/2/index.html","d9f957df26695ba80018fe1b9816cdb1"],["/archives/page/3/index.html","2311fc006a4b9d01c683eec347b0f6a2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","34c8d00ca92bd6ba2d62f43e514a16c7"],["/categories/C/index.html","66e509304cf17d7ff7c1e39d34242ad7"],["/categories/CG/index.html","9f9be0779c2bc387bb76e9a8729f6aaf"],["/categories/cpp/index.html","fae21c1b5e7487092a63c8c27dcbf0c4"],["/categories/cuda/index.html","405c161cd113c81ed73fd590bbcb39df"],["/categories/cv/index.html","3f3dc325029fad32bb02eb46bb86dfa6"],["/categories/index.html","47de6457478ac592af3f99defcb021c4"],["/categories/java/index.html","cfa62acab7518a9e6adb173096e7d621"],["/categories/markdown/index.html","1e40e5e530847ade098a6b4fc087b3a8"],["/categories/python/index.html","e2d24cf211dad597f07da03fc27a9855"],["/categories/vim/index.html","abd3990f66db9f5b978b178c3ac21203"],["/categories/数学/index.html","bb39d0fd286cde3957f9681fb9e1dfbb"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","ec43aae74ffe0a6c792510a07e765439"],["/index.html","5f681f535566651d2f563ac74e21f00f"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","e1278f7c3b7361e2b76909ddfce91d1c"],["/page/3/index.html","cd99cb9f4c89eceafcfc602a9c02d654"],["/sw-register.js","e8ebf925fc4b709b4f69c686b9094d5d"],["/tags/3dgs/index.html","4f24d0840c89e3044d33daf7ee07dae3"],["/tags/Android/index.html","ee812772a759c4adeb1dae8efd8096ce"],["/tags/Arduino/index.html","6a73f1cd4e6487bbaab4173aab73949a"],["/tags/OS/index.html","c79372fef466dc7a7464d58bd28c0650"],["/tags/index.html","e3022c4ad9007250700749a22dd96c1b"],["/tags/刷题/index.html","6490172d270a00715133c70ece377b40"],["/tags/前端/index.html","948018d777f4267e5584d85df27ed125"],["/tags/多线程/index.html","2eb65bf2580673db68856cf4e0dcd058"],["/tags/数字图像处理/index.html","122994af8fc1d450b58b80095ea0b95d"],["/tags/数学/index.html","373dd66f984e15a33a00d7c8a2dfeaa3"],["/tags/文本编辑器/index.html","3a90e7e2788c798ff09d197635ea64cf"],["/tags/深度学习/index.html","d6ce91368caac4f3a4e0017f61b50504"],["/tags/渲染/index.html","8705546984551dfbb1e3bad0cc2d7bf7"],["/tags/游戏/index.html","97e3a9f0afedc49dcb3f883a794f0f6a"],["/tags/算法/index.html","32c9a4f807a956f7b59d4f97ba3d55ab"],["/tags/线性代数/index.html","6918cba58cae67e3500d0233d746ab54"],["/tags/语法/index.html","67e549c887a366709b57d00ae9a92865"],["/tags/黄油/index.html","8a355774c002aa5ccc80422f1ce97f72"]];
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
