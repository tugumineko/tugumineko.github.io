/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","dc6fd3de3d909718e67dc757bec29611"],["/2024/04/29/markdown-syntax/index.html","9c2f784c824106779467ef5324959e73"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","31e89702fa04a4358f73f7f59207126a"],["/2024/05/05/PyTorch深度学习/index.html","5def96596683360d6ce66d91d6594e97"],["/2024/05/06/python图像处理/index.html","499696bfc3f216da365b25cd94f5f46e"],["/2024/05/08/the-tour-of-cpp/index.html","5db792a650b79451aeb353f421ef2ce1"],["/2024/05/19/生活在树上/index.html","64522b9c6ef990433ec7fc2f9531608c"],["/2024/05/23/vim-syntax/index.html","aaa5ba3b60d6d7dd074061897c8fd116"],["/2024/05/25/正则表达式/index.html","4d115dec7544685817365fd87bcfc9b8"],["/2024/05/26/diffusion-model/index.html","61d5cf43d7fdba4abfbf932c3ffbe1c9"],["/2024/05/28/user-malloc/index.html","92ec57a65f5c12656a0da3703dfa473a"],["/2024/06/05/状态压缩dp/index.html","673312896df3a3790cf0ad69fd2b76c8"],["/2024/06/10/STL/index.html","8a6858ec9be31933e3e232731dd12c7a"],["/2024/06/30/picture-format/index.html","9d3da1ab37b820764c5314357c86a33f"],["/2024/08/17/GAMES101-Assignment7/index.html","66e13d149c43396281eba2b148d090c4"],["/2024/08/18/cpp-thread/index.html","fcf284fbd4586d333d1976f494664ec2"],["/2024/09/06/ArdiFan/index.html","76a7815373c3ff1ccea479e759f527cd"],["/2024/10/22/TA百人计划笔记/index.html","9eb56c36702cfbed229f33642e74d734"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","92782898abaa5d4321211eb3a2af0ac0"],["/2024/11/05/cv-concepts/index.html","e3a7d5f009913556f2f94969d7d9f290"],["/2024/11/11/softras-environment/index.html","9cf65343a44f1e5df7cf7bbdb5abff84"],["/2024/11/25/3dgs-sketch/index.html","9ddbdcc69483a921a9da9452fc1e1c5d"],["/404.html","906ac5030815463e70eea8a3f69ba5f6"],["/about/index.html","d965389b7ea902e04cb552dee7d737ed"],["/archives/2023/12/index.html","b458e02fc05541a023dfe5737ca39157"],["/archives/2023/index.html","3591b82e40967cd676f0f83036138ef5"],["/archives/2024/04/index.html","2ee3c7ec0d5253d8c30fb876113ab073"],["/archives/2024/05/index.html","badd80a3f660860355bcd7942f7ba9e2"],["/archives/2024/06/index.html","6948a66f448389a8cce495e82f77e5bf"],["/archives/2024/08/index.html","ca72738a69dac967f6653393a664303a"],["/archives/2024/09/index.html","dc4d848fa39d9ec2077bff042358b902"],["/archives/2024/10/index.html","6009888a8404cabdd6e525cccbfeda92"],["/archives/2024/11/index.html","565281b8b2ce861112e17af378cae50d"],["/archives/2024/index.html","f769f8db3e70edc2f0210ef2934b2cf4"],["/archives/2024/page/2/index.html","81bb6317ded72e81d879dc167f09ada9"],["/archives/2024/page/3/index.html","7e812d50908b0d1e6cbbf156c4e93b60"],["/archives/index.html","1437b19233b3b45602d6c4dcdd58bc7c"],["/archives/page/2/index.html","77a182fa4cccee8a49a044214793b6b5"],["/archives/page/3/index.html","24f762afb4fcde4ad012040952afd22e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","f7ad98ddc1f13a98b4fbe02662fc2a8a"],["/categories/C/index.html","880294d10c1b88993c806e87f4f1ce68"],["/categories/CG/index.html","1dcf719771bd4bbd13448f667e93c7b1"],["/categories/cpp/index.html","1aab8387dd293db319f8eb40f9f38544"],["/categories/cuda/index.html","3a296a36cff76b8cf4a7b444ff5a1c26"],["/categories/cv/index.html","d628730fd1a5b740a467325cbecd01b5"],["/categories/index.html","004f5c427224d6447838392764d95421"],["/categories/java/index.html","2b4276760d8433053c74f05e958a214c"],["/categories/markdown/index.html","757ae6888d918aed45ae8093eb7e39ad"],["/categories/python/index.html","6a4f3c471b7afb4c6a3a4b52c86e987c"],["/categories/vim/index.html","d5f31ae7f335dd4f66f3fcae3f5266c5"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","6577c7d2586450c27551df72cc3a5662"],["/index.html","cc9ae33550405d1a9972f8e1fd6cbcda"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","1f8c73f03b281529c2c119e7f389e7eb"],["/page/3/index.html","166250048c472c06ac6bb9efc5bf1cca"],["/sw-register.js","184ad773858f3ccd35054f2499d840c3"],["/tags/3dgs/index.html","23ab58b0199aca7018b3fcc86b15458d"],["/tags/Android/index.html","4dad6bed4c03290439b61e3d7285c85c"],["/tags/Arduino/index.html","e8f3f3049ea298f0aafed1339b6321bd"],["/tags/OS/index.html","a2bbc233b53f50888466257366ef36ce"],["/tags/index.html","582e0877f9a71839a75872768de201b7"],["/tags/刷题/index.html","58adaa18ce51ed883f5a68a3fcf70f15"],["/tags/前端/index.html","3cceeba15fd40d268977cc147c2bfeb3"],["/tags/多线程/index.html","5522c0395f7535499fe4a594c04143fb"],["/tags/数字图像处理/index.html","a0b1a4fc979ca42189473baf269b62bf"],["/tags/数学/index.html","4f11301b93eeb7f4ac34ef5ec605275a"],["/tags/文本编辑器/index.html","7c9a9485bf3a21eb92e7563cfe8a1f88"],["/tags/深度学习/index.html","4a3bb69367f4181198455ba79e8b77af"],["/tags/渲染/index.html","d2fa50f94ae9a6b8a1b2c7c153bbeb79"],["/tags/游戏/index.html","803c1f2ac0808da5ffe3ea091ca0e7ef"],["/tags/算法/index.html","0314835b003f1cbd166bd89607c720a0"],["/tags/语法/index.html","9f3c697a4eb4149213441c8ad20de885"],["/tags/黄油/index.html","4fb5929701c03ab4ea4888e005220449"]];
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
