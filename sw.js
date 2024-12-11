/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","aeb62562afda1f703a9985e599d232cc"],["/2024/04/29/markdown-syntax/index.html","675892ce9496a3f7e34be1407ecf765e"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","7f6d67f8dbbcc8eb914e53401518efe4"],["/2024/05/05/PyTorch深度学习/index.html","768082c26911a22f94117b6ed4789909"],["/2024/05/06/python图像处理/index.html","b2bff35a2861a98626058952459a01d0"],["/2024/05/08/the-tour-of-cpp/index.html","232a6ed5be9febe861977113224d6c07"],["/2024/05/19/生活在树上/index.html","471ad71be0239e45396a0192d03a9fdc"],["/2024/05/23/vim-syntax/index.html","1f167c92eb3e2f475c6bc8868493b33e"],["/2024/05/25/正则表达式/index.html","7928a80d6faaaae6bab3183f16dec3c0"],["/2024/05/26/diffusion-model/index.html","9160c16237da131918466a1372a84b38"],["/2024/05/28/user-malloc/index.html","81f62a7a0bba1e917e9dfc1b724d8f41"],["/2024/06/05/状态压缩dp/index.html","255d8a74861b005bbd3ed4facf267956"],["/2024/06/10/STL/index.html","5bdd634b2ec2303dc1cb9f480861a6fd"],["/2024/06/30/picture-format/index.html","d9d876adcbee4de26d886c902a71f201"],["/2024/08/17/GAMES101-Assignment7/index.html","7bbb648b944de04625dd219b48c23cc1"],["/2024/08/18/cpp-thread/index.html","2587cd167d765c56da9cfe89a6747ec9"],["/2024/09/06/ArdiFan/index.html","54e3a5670c098157a48533c08ee61939"],["/2024/10/22/TA百人计划笔记/index.html","24c1ed50e1486a3fc6ab1c1eb450ea33"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","9bbbcfe98d3e4ef489d8064010bca90b"],["/2024/11/05/cv-concepts/index.html","12fd2a3b336f172e748988b777546d5d"],["/2024/11/11/softras-environment/index.html","adae29c367c6ef6a26f12aca2ffd83ed"],["/2024/11/25/3dgs-sketch/index.html","1293e8ffd549ee6436d8672e389ebece"],["/2024/12/02/mini-splatting/index.html","751416ec2ea1cb6f0c72a2de1c2c40d1"],["/2024/12/06/Quadratic-form/index.html","039fa91a82f6cd01cf7af4ed294000d1"],["/2024/12/10/eigenvector-and-determination/index.html","27d57a72792cd1fdfa7cc8007a39ad5c"],["/404.html","5695795c23e8768b78f5e448f79ab8b0"],["/about/index.html","2b2f0eae5933f3659b4edaa85c3a6349"],["/archives/2023/12/index.html","cea879001fcd5b357d70f1a24e538392"],["/archives/2023/index.html","8ce1fc10a32138d566583375d1e527e3"],["/archives/2024/04/index.html","038db0dc0de765f324699f0841736fb0"],["/archives/2024/05/index.html","aebf463a2d51e8515a5df337cd916fcc"],["/archives/2024/06/index.html","47292bb050ce2969e12571180239e10f"],["/archives/2024/08/index.html","fa16f76ad038751395d964e897974bd3"],["/archives/2024/09/index.html","a68f1323f40f9784d2c40146ab5facf7"],["/archives/2024/10/index.html","5737c8b065843c358cfcda443be50b2e"],["/archives/2024/11/index.html","6366166b41bec4078154e1a306aba980"],["/archives/2024/12/index.html","5b571581184818eadbd1a703b7b9e0c4"],["/archives/2024/index.html","505748c7d650f47aceead66e05bd95c0"],["/archives/2024/page/2/index.html","2d1228320e1548bf891c333cb1830bc6"],["/archives/2024/page/3/index.html","0f2728691625f023c6941fd0ee0465a9"],["/archives/index.html","2999eee46d99a923739c688f3eb7a64b"],["/archives/page/2/index.html","2d66178e004d0d6742e20e9a17d8366d"],["/archives/page/3/index.html","fce01adb661b8f8bfa499ee68d1814a7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","69924c30c02f48711583387de9890785"],["/categories/C/index.html","b88bbc6088d43d14a3b397bc7e2fb9cf"],["/categories/CG/index.html","78a1645244774733e897c2881c851305"],["/categories/cpp/index.html","7d990e37a3667a45ed0e6b76e644f9ee"],["/categories/cuda/index.html","8929178e25067b738eb8fb5cde2a1737"],["/categories/cv/index.html","a308b9f8f1db2883b63b0bba08a219b5"],["/categories/index.html","7b24dd11bbf725d8800ea81a2431084d"],["/categories/java/index.html","f98914303849f935b77b1e3d25c416a7"],["/categories/markdown/index.html","1cbf81de492258ca3ae2df82b3854365"],["/categories/python/index.html","2491de8d411cc0fbc95a0ea10b93298d"],["/categories/vim/index.html","28e06c742ddc4272938629e2bdab864f"],["/categories/线性代数/index.html","3bd5699c8cf60c2831e34cab4dc9d9be"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","db6364ceef50b0ea8f7e1925de3d83e4"],["/index.html","65eb3ec1ee1cf0d9fa1713428fd83715"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","e09f088389f2b2455ce72a9d64d1bf10"],["/page/3/index.html","32d6b51abc3be0527280125967739349"],["/sw-register.js","a061e6dd964b4b1d8cdf619c2a363c1c"],["/tags/3dgs/index.html","5e395c70c4c2abbb7bafe4d9256a659d"],["/tags/Android/index.html","aa7eb74940a9427324a138540fb1be61"],["/tags/Arduino/index.html","6f6f2300909baa160abbf9978e3ee172"],["/tags/OS/index.html","2b86f23957208cb2dd58593274c900fa"],["/tags/index.html","93baeead4d37ba7f8fcda744e3cf876e"],["/tags/刷题/index.html","6ff4ba730d4c661d1ebe95afbeadd6f5"],["/tags/前端/index.html","637a45c4c4edd7c2f6fbf6e49f46920c"],["/tags/多线程/index.html","d9b472a0277058cd66c5e2295daf9b4d"],["/tags/数字图像处理/index.html","c6a38aaf05b6296c1626a0c913161110"],["/tags/数学/index.html","960cacaa5f535feed3321b2ad741f90d"],["/tags/文本编辑器/index.html","7e232f2a16f420a04f406c072bc1f71b"],["/tags/深度学习/index.html","e3321b97f63b62017ce4372a6ed4a786"],["/tags/渲染/index.html","d1178cdd2a21edc45c2c13495c742e86"],["/tags/游戏/index.html","bfa20e2b3f1fdc8a9a164658531cb920"],["/tags/算法/index.html","12b1a4ec49ff8c052dd111f71b40c4a7"],["/tags/语法/index.html","fe044e0957cd8c534195885ac6acb753"],["/tags/黄油/index.html","3432e444eedda8617058b451d805a48c"]];
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
