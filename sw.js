/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","a713575041e3d881606b8e0e04376f33"],["/2024/04/29/markdown-syntax/index.html","be600c5e6369aa5af2555e6b3c6ed9fb"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","b356d65dfe5dd462230e227cd48b936e"],["/2024/05/05/PyTorch深度学习/index.html","d9a62cbb00b600a8ee7a240a1eae305d"],["/2024/05/06/python图像处理/index.html","210bc30886794b8c31b3c5945d58db44"],["/2024/05/08/the-tour-of-cpp/index.html","c159b8012b7e71364c721738b4ec1472"],["/2024/05/19/生活在树上/index.html","9172e4abab576c9746d4ab2434bed271"],["/2024/05/23/vim-syntax/index.html","7c3feb0df122c2ef689a8245ccb9cb45"],["/2024/05/25/正则表达式/index.html","9322953aef6c1e65108266949526f918"],["/2024/05/26/diffusion-model/index.html","28aaa2f9f941fd3d833453f107973f1f"],["/2024/05/28/user-malloc/index.html","f7204dfd61ede116723e089a392b951a"],["/2024/06/05/状态压缩dp/index.html","3d1d9414071adf77e2982cea35025f4a"],["/2024/06/10/STL/index.html","a7244a5c619c2abafe2f93a7c5ed0ad7"],["/2024/06/30/picture-format/index.html","e02648bac69516bc0ad8acb05073005e"],["/2024/08/17/GAMES101-Assignment7/index.html","b0752064fbbc8fd6197f8a06092326fc"],["/2024/08/18/cpp-thread/index.html","1add5410f0e8665e87ddc535d1e244a9"],["/2024/09/06/ArdiFan/index.html","8f76186c063c5b648cb6951bc6e853f4"],["/2024/10/22/TA百人计划笔记/index.html","e92c560392c970fc8412555c30a26e6d"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","b719fe47141c433328ca5e19322ba1a6"],["/2024/11/05/cv-concepts/index.html","4297407814897640272c10de70fa59c9"],["/2024/11/11/softras-environment/index.html","315adebf282922ce3a4ddc43bb3974c8"],["/2024/11/25/3dgs-sketch/index.html","f033da5400790098219daf54d2420226"],["/2024/12/02/mini-splatting/index.html","8b80c33d445047ec2316c0946adb1f76"],["/2024/12/06/Quadratic-form/index.html","4c4da6d752c006133f757be8f680a97a"],["/404.html","a0c997184e1a7f4dfd6405aee2c43183"],["/about/index.html","326b34981200b012b10d72f27ca7735c"],["/archives/2023/12/index.html","7766808efaa73ca0d02c7b954b767365"],["/archives/2023/index.html","afcbed7ec217207f00c68ce21dc5d742"],["/archives/2024/04/index.html","068aba497fa32e017156ccb7ef5aa481"],["/archives/2024/05/index.html","8a25cc12e7bb6a9624482310cb79dd65"],["/archives/2024/06/index.html","dd461ef0bd58e2e5e3fc585f8c7a7ef6"],["/archives/2024/08/index.html","279958244cae3d7ea743ecbb207323ca"],["/archives/2024/09/index.html","a0e92086adf3e247722e0c0b6bb1e1c2"],["/archives/2024/10/index.html","c631ef9ca18ea0f8233c8526a3515284"],["/archives/2024/11/index.html","2918b1d38b97de60857b47613a4bc2a9"],["/archives/2024/12/index.html","c9741f0453fd55be4acece950ca955c8"],["/archives/2024/index.html","11711ff5a7874eeca551c2ff3f0e5bde"],["/archives/2024/page/2/index.html","7ebca3a24e053dee182f330b9e54c3fb"],["/archives/2024/page/3/index.html","e1b6083cea99bdc9db0703023dd0f312"],["/archives/index.html","55657c43c51526ef22e7ff9814491fd1"],["/archives/page/2/index.html","5a7e8411082dcdd8c0a2876ba32eea8d"],["/archives/page/3/index.html","47310de25eda4f657a87158e4af4ab62"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","c25c99e27d090d72258ceeb6c241a313"],["/categories/C/index.html","771407b68e987d0d1f510b1dde34c01c"],["/categories/CG/index.html","35fde998c0f5a2faa7af30dc8e99b806"],["/categories/cpp/index.html","953c698c990ea288413179207ba56213"],["/categories/cuda/index.html","7f2dc1a1a77e1428609ba08aba0657ef"],["/categories/cv/index.html","482d7ce8d56a7dee226cae4974e32dbc"],["/categories/index.html","b9ff2ca8341c55a774ca25b60bcbfbe8"],["/categories/java/index.html","04b9b75c7e971401f880fbcf3f24f7be"],["/categories/markdown/index.html","cd8f9c033f14f60408543e67668e5764"],["/categories/python/index.html","248e666e4d8cf4b07c166c8b423a3248"],["/categories/vim/index.html","712078779c6670ec5a6c946dfca71cfc"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","3b2f9150bba1fdbbfd1e40d192d120a2"],["/index.html","51c8e146e9899a90ecb8ec8412163f36"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","1f976990bb3ad7385f70681a8abd2a4a"],["/page/3/index.html","6328ff928022b477e1138d6cc37e9077"],["/sw-register.js","5780a7c243bceed73aea5844d35659f1"],["/tags/3dgs/index.html","a55317973e02bee2db934bed95a1c25d"],["/tags/Android/index.html","beb6009ca93423fda0f03218fc4b6aac"],["/tags/Arduino/index.html","660d146ddf736ace379871ff44f073d6"],["/tags/OS/index.html","8628935850b0dc330efb0159c991e5e9"],["/tags/index.html","cdb8b151a0612468ba0ad296da37be7e"],["/tags/刷题/index.html","048bb6f409c6229332b5f8d19cce8a12"],["/tags/前端/index.html","7497e15efc9ae8b789c53ab6d19a221b"],["/tags/多线程/index.html","02abe3e6db30a15b523069d56986c201"],["/tags/数字图像处理/index.html","d249479d4dd868716c6cba7cc3fc4766"],["/tags/数学/index.html","0a5b98cc5b79e0e67878ff9c776100f7"],["/tags/文本编辑器/index.html","cd8a7c31b43b5e3472c2ba461b5f2055"],["/tags/深度学习/index.html","49e1a64c62dc2cf360146abb541ef27a"],["/tags/渲染/index.html","fb43cc3edc89256f212971b9f09f4385"],["/tags/游戏/index.html","1c928fd6ae65421e6462986d3ba9a861"],["/tags/算法/index.html","8f3d35b0ec0e7c81285fd70e3e310f9a"],["/tags/语法/index.html","0b8344ea5e5e95df0075699d97cf1371"],["/tags/黄油/index.html","952ee449a0f9889a01234b5c4ef4a499"]];
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
