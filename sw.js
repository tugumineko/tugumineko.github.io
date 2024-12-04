/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","de6a653904ac914f229cd19f9450c7e6"],["/2024/04/29/markdown-syntax/index.html","46b499e34fec56f36ed7d66f7c12d916"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","e81c42ed0e4495e73abbef6b56ce8cd2"],["/2024/05/05/PyTorch深度学习/index.html","73c5be2a75911e26497d388a0bb3af27"],["/2024/05/06/python图像处理/index.html","73e028d6099c2186772707b5f9120af1"],["/2024/05/08/the-tour-of-cpp/index.html","ccf2477c27350dfeb9b983064c1f8b45"],["/2024/05/19/生活在树上/index.html","2ea33ea6a40043701441235781d53984"],["/2024/05/23/vim-syntax/index.html","f250a6aff50cc37d6f219aaff235ab6f"],["/2024/05/25/正则表达式/index.html","1e87599d289984d4557eef574e0bb2c0"],["/2024/05/26/diffusion-model/index.html","32ea06bd62a470c0753939754fddffee"],["/2024/05/28/user-malloc/index.html","9732ced3ae984c0db71a31f10054500d"],["/2024/06/05/状态压缩dp/index.html","0a3bb17645113e6fe18fda0f21da47a9"],["/2024/06/10/STL/index.html","e70b6ba768844c4f01747e88eb37a629"],["/2024/06/30/picture-format/index.html","89f859250e9b8173b22e21b57a6003e2"],["/2024/08/17/GAMES101-Assignment7/index.html","09d863a05014d107e0d428b1821fc232"],["/2024/08/18/cpp-thread/index.html","2674d4382090d7992e5b903d6c16f7bb"],["/2024/09/06/ArdiFan/index.html","5cfb0d221189a128e61ca9e74b54926f"],["/2024/10/22/TA百人计划笔记/index.html","53749304f88365b58b7375829af77cf7"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","6f83d29d48254087fcf9db2357c02e00"],["/2024/11/05/cv-concepts/index.html","14bcda2e6355580259c480988858cd48"],["/2024/11/11/softras-environment/index.html","9b768ee7c24bff989268f34a64ef1487"],["/2024/11/25/3dgs-sketch/index.html","f07d688a663abe003d718d83079f7184"],["/2024/12/02/mini-splatting/index.html","ef4881c352375b71294393c685daad44"],["/404.html","3fb17c6f8a068ffa546c7692157aa44c"],["/about/index.html","f97108354546cbfcdd6c2c660d7477d8"],["/archives/2023/12/index.html","41ddfcf24bdec07d3d7ba8437da5450c"],["/archives/2023/index.html","d463c1a3a5aea2ec3d48524aa858699b"],["/archives/2024/04/index.html","0d4023b1502d50529707b0f0111063d5"],["/archives/2024/05/index.html","082ae23df6e1dc75f83cb596190c85ee"],["/archives/2024/06/index.html","822d45fdf919fbe98c77bac66508eacc"],["/archives/2024/08/index.html","ed9f3620b116d5ee5a5eaa06fa7cde10"],["/archives/2024/09/index.html","ddfb61248b8663921e906dab34177eaf"],["/archives/2024/10/index.html","4f37b549cb8fed3dcea79b1c12a4bd28"],["/archives/2024/11/index.html","d6db8cf68821c967723a3b9cb0f90073"],["/archives/2024/12/index.html","396352e4466a15f80f7dd88c99f08894"],["/archives/2024/index.html","dab36e206459d865f2abe91fbf6f156b"],["/archives/2024/page/2/index.html","df8e290ba262aff8f622e567c17e4100"],["/archives/2024/page/3/index.html","18e16904cea19265e2fe88915133c276"],["/archives/index.html","f5278a9202dfdec0e8f6627b4235a475"],["/archives/page/2/index.html","f835ef357627525882d86b9b1ea96f52"],["/archives/page/3/index.html","5330af2e0e42995437f6789c42eb9fc7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","3b949cb7f1ae1479beec00991471b9d5"],["/categories/C/index.html","9d7643d357bb94d105e5fd5cf77bd23c"],["/categories/CG/index.html","a99d5d5df6b91db8aa1fd66aa046d290"],["/categories/cpp/index.html","48ff5d7c74761b45e9279125cf7e85b3"],["/categories/cuda/index.html","6586eef111399b0a3e3c78e59238f464"],["/categories/cv/index.html","8e605a84044974e0c99d4b8c31730e91"],["/categories/index.html","92070cb8e7f1f73aecdcad79dc97dbc6"],["/categories/java/index.html","c853c819b6c673e61ad2ecd9dabbb9f3"],["/categories/markdown/index.html","90d33c9a1d98e3289b50d4c8d6678366"],["/categories/python/index.html","a2d18d1177345ffa6ac724cad61ed720"],["/categories/vim/index.html","ef75b3d7e903353c10371b18a724cea4"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","7438b1abc8f3c469f1e122dc066a3948"],["/index.html","22e4115a078ee6605113531d01ca82b5"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","4eeeed92fd872c27be5dc0ac7eafc1aa"],["/page/3/index.html","7c395a99172de73a9cac3b1b32aec366"],["/sw-register.js","ba9ab8ec5b3f4f4658ae2611869a2f10"],["/tags/3dgs/index.html","4d1d73d56065db9d47aa03b642179d3a"],["/tags/Android/index.html","47d3e2d92a404e07e86a6275b24a5108"],["/tags/Arduino/index.html","2f688a663bb110f93c55aa06d0ca729f"],["/tags/OS/index.html","dde668dd4b79a657e28109c906cea624"],["/tags/index.html","be012fe7e208ada8f36bffa76da0d17b"],["/tags/刷题/index.html","b837259609bd59eb19bec6d22a8eebb4"],["/tags/前端/index.html","8197585ef397f5270fc31adc6449a8d6"],["/tags/多线程/index.html","3c392b2ee9862cd3cdedab046ce647dd"],["/tags/数字图像处理/index.html","6fc84bf22903ff28948ca8d744a95527"],["/tags/数学/index.html","f4148eaeca208569357c26c608a4d1db"],["/tags/文本编辑器/index.html","98e47dad7b827926341fad42ec4835b4"],["/tags/深度学习/index.html","5a4bf37a947a0de7bba80e0212f1c05b"],["/tags/渲染/index.html","7a816909657184a552870258c26854b4"],["/tags/游戏/index.html","0ac8c5861357b2635efd292cde970180"],["/tags/算法/index.html","30cb9c8bbdfa0dbdc110fd41e759c4b7"],["/tags/语法/index.html","b1a261ec3e36e8ce8756a13be8fa0098"],["/tags/黄油/index.html","94be62b1c0ad9ae1c87b896a28f0b799"]];
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
