/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","670e44d7056043b2de8fbd7bd067e27b"],["/2024/04/29/markdown-syntax/index.html","3dd9ca54b6e7926cc570ba2c957ba1d0"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","35f1034c1b302d17b00d6e72d3a1ee17"],["/2024/05/05/PyTorch深度学习/index.html","ba2375ed0007aa981ca1310e0d2f25ac"],["/2024/05/06/python图像处理/index.html","7b5336740bf936dc33bd9e4ca53568f6"],["/2024/05/08/the-tour-of-cpp/index.html","5a67102c1c273f282a792a1741433f0d"],["/2024/05/19/生活在树上/index.html","3060e24faff34b203d35ccbfaf74a01a"],["/2024/05/23/vim-syntax/index.html","551c6789995c22389206f77fcf085d02"],["/2024/05/25/正则表达式/index.html","f589714c367d7493dac62f959c3364ba"],["/2024/05/26/diffusion-model/index.html","888459dce6ff45a2771a67cd805dbba8"],["/2024/05/28/user-malloc/index.html","71ba81b5d46105a3f214085c94552de1"],["/2024/06/05/状态压缩dp/index.html","87319ea64672b70294e52b6feb72f01d"],["/2024/06/10/STL/index.html","c4aed5330bf6e5fad4b7aef88ebca8ea"],["/2024/06/30/picture-format/index.html","f32e737386dbfcc59c46d21c749145b3"],["/2024/08/17/GAMES101-Assignment7/index.html","54cf3832fe81e7b0865e23db616e857b"],["/2024/08/18/cpp-thread/index.html","0168d3818a1b490d655e62b2671583e2"],["/2024/09/06/ArdiFan/index.html","0cacc8429a2fa86a89e613adf5e9880f"],["/2024/10/22/TA百人计划笔记/index.html","36ff7bb0fd7014501ff8f1571c956788"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","cfae290105f57eeabad7cb700b34c920"],["/2024/11/05/cv-concepts/index.html","0d4c9c51ef337f4253f1d0ea865177c8"],["/2024/11/11/softras-environment/index.html","6846587ff62beb79604febfa89baddc0"],["/404.html","6a3450e480536a20292d87664d9eb5b0"],["/about/index.html","9a8567dea35ba254985000bed9dbcd6c"],["/archives/2023/12/index.html","96c24d68bb89a88335ac2c0b0a41255c"],["/archives/2023/index.html","605d399d4f0fbca6eb2fc2f5ddf5c8cb"],["/archives/2024/04/index.html","7e66d691ed77adca9de189cbac08dd5b"],["/archives/2024/05/index.html","76018cc404df6fa9493db5738074edf7"],["/archives/2024/06/index.html","9932561df03a4d9887d396a3deff6d79"],["/archives/2024/08/index.html","b34d0e772ebb78e14954fa6f8fdd37da"],["/archives/2024/09/index.html","d264d1b943ecab5aba7d43580f2a3739"],["/archives/2024/10/index.html","16b81cc6e674a35c5982daabab53cade"],["/archives/2024/11/index.html","f0fc1a089d187d8ada6413e9b53adfc8"],["/archives/2024/index.html","4a14bce93364443b61f20fa20cebd037"],["/archives/2024/page/2/index.html","ac2fbb865ca0b3bdd26889279ed9e60d"],["/archives/index.html","cae65979c6580ff33cc8babb25480f5a"],["/archives/page/2/index.html","c1c806cf5ca6a333c0a144415a0ddc66"],["/archives/page/3/index.html","44130dc3c07088c6ab24b059825120d9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","35112046cdc5a90000202d3c4b14008c"],["/categories/CG/index.html","790a5da208b289b335e3d0c83e8a796e"],["/categories/cpp/index.html","cea7ba256627d7b587758c191262c196"],["/categories/cuda/index.html","d6a9150e5e3d57a6fc497fe49764282c"],["/categories/cv/index.html","3d1b5e745c13a06f9458319a4b3fe12d"],["/categories/index.html","51acb970f555e005e6d411b147c43280"],["/categories/java/index.html","723cc1f94ff4612cc614eea4c0601b69"],["/categories/markdown/index.html","5fdb2a72d13acfc6b77e80aae3e087c2"],["/categories/python/index.html","9ecd6176c6f5ff6faf584ffe9e53dc44"],["/categories/vim/index.html","6bc477b1a368cee25447ce8fa2b433f8"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","7acf724c8c20d11cb3d4b6acfd9274d7"],["/index.html","407c4cdbb91da03809a1dbc6531a1077"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","fda4668c9ec31d966a4df632341b2f1c"],["/page/3/index.html","f56ce0ffafd5625a7957ebaf4a56869a"],["/sw-register.js","59cc544d48b574db0ac0aaf3922296bc"],["/tags/3dgs/index.html","624ddfbb39e67539703a2ef6e17cd10c"],["/tags/Android/index.html","6643f4fdd1f72a7203ca2b1819ab9d8f"],["/tags/Arduino/index.html","02e44dde1978f300c7ec5232bc8f1cea"],["/tags/OS/index.html","c4ef288e4603d92c53904e4a54277697"],["/tags/index.html","e3c038e632ab06f330f35f9a22f0781d"],["/tags/刷题/index.html","0fdfb8f83d88392a17bb203d80f3f6bf"],["/tags/前端/index.html","8f3129a4c5c77e6ad6195f34e2648c22"],["/tags/多线程/index.html","bdd293c80b82d53ddba2ae4f965cbedd"],["/tags/数字图像处理/index.html","c9bb8dcb95cc9df06c3dad15e062c3cf"],["/tags/数学/index.html","6c1167374810306437c7ad7039bfdcd6"],["/tags/文本编辑器/index.html","d9ce7994bcb058d642e192e444945929"],["/tags/深度学习/index.html","f07478aba01be5bdf0fce151f49aefbf"],["/tags/渲染/index.html","aa02a1f50425808a0f83d391833d334e"],["/tags/游戏/index.html","e1c67cd16093a6ff1408eb571693f244"],["/tags/算法/index.html","01e2437a8cf3ed77dcec0409a7e55dbe"],["/tags/语法/index.html","58754413420492e6c782ccf5b649c46c"],["/tags/黄油/index.html","4f100804f9d99b361842dd5dd8be7011"]];
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
