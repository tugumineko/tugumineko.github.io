/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","4cf270345b52cccf18ab1920c59bedc9"],["/2024/04/29/markdown-syntax/index.html","dde4c6f2a77d153a2591bfb0e43a0ab4"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","44699d61d126f23bd33b6470b1a69600"],["/2024/05/05/PyTorch深度学习/index.html","279f9dcb8b80c6dc1778cb8b829950c2"],["/2024/05/06/python图像处理/index.html","7360468f1a2eca5916dc00e680d80862"],["/2024/05/08/the-tour-of-cpp/index.html","7c036f2f16411e99a5b7a85534ab7ace"],["/2024/05/19/生活在树上/index.html","7e32b39113bd7a243c78af1b849612c9"],["/2024/05/23/vim-syntax/index.html","4021db1b46fd72419b1079e0bc480661"],["/2024/05/25/正则表达式/index.html","c4c8b4178531b53298975acd1c17c3f3"],["/2024/05/26/diffusion-model/index.html","0973be7f387e0d7adc2906722481ea2c"],["/2024/05/28/user-malloc/index.html","d5b1782bec6629554519e934e159c320"],["/2024/06/05/状态压缩dp/index.html","d529aeb7b43aff0d632d7e86e3d96d52"],["/2024/06/10/STL/index.html","a982393c7f4ebdf3d1bc964a91869e7b"],["/2024/06/30/picture-format/index.html","cfaaeba3470f92d45118cd4ad10be4de"],["/2024/08/17/GAMES101-Assignment7/index.html","f749c5ec2af3788b46b49198161eef2e"],["/2024/08/18/cpp-thread/index.html","be1c0009a677e251a337ee9ed52ff6b8"],["/2024/09/06/ArdiFan/index.html","f6ef16af5222b7ae3dd1a5e230d3db7f"],["/2024/10/22/TA百人计划笔记/index.html","82852224b6aae92216b59ae246dcf74d"],["/404.html","a6f655117c1bc0d369379b9cd11c7891"],["/about/index.html","cc1eae3a5e16cbc94cc8237c4a5fbe67"],["/archives/2023/12/index.html","d197d3771e16fa1b6d63447271d070ad"],["/archives/2023/index.html","6afdaacf16e6e4623a229141845f8aaf"],["/archives/2024/04/index.html","100a4e04a4a1c19c3f509ed479466a9b"],["/archives/2024/05/index.html","455500c7294696150f39852a88f9969a"],["/archives/2024/06/index.html","72e436fe23c428854dd92e7aa0c944c6"],["/archives/2024/08/index.html","d1379ff540c21a68b35474f4b52d687b"],["/archives/2024/09/index.html","3ee61e3f9e44d52e9b973e991f36e95a"],["/archives/2024/10/index.html","369dcd7ca811db804f91a26037bb22d9"],["/archives/2024/index.html","8aaa19ec929b481fc998425ec53071c9"],["/archives/2024/page/2/index.html","c66aa9ea203a4509265e861c9507135f"],["/archives/index.html","e4b4416f1b26d1cd3eb2aa26d19cfbbe"],["/archives/page/2/index.html","3a6e7a5b8325149bce705b5224ab7f59"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","25c14b3323f3e785cda54a175e1c9eed"],["/categories/CG/index.html","94c7c1319fa4b7a324e4c42d9485fcc0"],["/categories/cpp/index.html","256063eda78612ee0062c104d23492d4"],["/categories/index.html","fb90e4ef7fc2bcc13cc868143f589f54"],["/categories/java/index.html","12ad0fe3b136d04aa56c7b4331753ac0"],["/categories/markdown/index.html","606f44ed8a45b2724e6e6f44e336ec57"],["/categories/python/index.html","449b3769f0f1c99f156f2a42de5d80b1"],["/categories/vim/index.html","9ab83d41d48bd61abbeb0eee4dbeb80b"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","a6e11397b7b87f8d38cd61e7bae8b966"],["/index.html","3af84c5dbeba0ecea1a1f0fc6fa357b6"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","b849399f2643dee692568699eb5a173c"],["/sw-register.js","8a9ec15dc2eeaab282d370c2a5ed3ce2"],["/tags/Android/index.html","d6bee1190c0cc94fbd4ee7a077cc793f"],["/tags/Arduino/index.html","c9680e069504d780c3bd61c4e0d5f91f"],["/tags/OS/index.html","aa244d585b6b7133c297804c405672be"],["/tags/index.html","bd87f55e005aeebdfa0fa185c580581a"],["/tags/刷题/index.html","c1733e22db51bb5bd7657dbe9385a59f"],["/tags/前端/index.html","cf466876f4dd24a3397be2767ce9333d"],["/tags/多线程/index.html","af91eb16985698a2dff02737ee4690f4"],["/tags/数字图像处理/index.html","3cd728a22d0239c434aba589700bdfdf"],["/tags/数学/index.html","c76dc38960e75f08e716eb42120e0cf8"],["/tags/文本编辑器/index.html","8792d8fccb7b1e1e351a1de044435c2e"],["/tags/深度学习/index.html","44ff57925bc78e9c0e4121bf4e45191c"],["/tags/渲染/index.html","0ec6a0c32d912ab46c277b0c983097f3"],["/tags/游戏/index.html","26a62b271a43000358f9c51e7fef2cb9"],["/tags/算法/index.html","12608dd507fa495e7ef393ad4ad54e41"],["/tags/语法/index.html","b21ca5273181721f78fbe24ba25e09bb"],["/tags/黄油/index.html","6ba0b1e8d3927d16e22a4c1f30b7cea8"]];
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
