/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","be4c82e1c110331a71dcdfe2bb071c7c"],["/2024/04/29/markdown-syntax/index.html","81f39b496fbfb99809b953a91926c166"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","27bdf17b2cdc9ecdf52516eadc5850b4"],["/2024/05/05/PyTorch深度学习/index.html","64f780449aa872f3576a49f949fee7b5"],["/2024/05/06/python图像处理/index.html","88d0895aee8f4f401bf53c9be0459edf"],["/2024/05/08/the-tour-of-cpp/index.html","c2bafad08cbfc161ec159bdd38b7f3d2"],["/2024/05/19/生活在树上/index.html","e7cffdbc588b6a78dc0cd30963aead4b"],["/2024/05/23/vim-syntax/index.html","575cd73f4ba3ce220dd988ca7af561c3"],["/2024/05/25/正则表达式/index.html","733f9020490a5fe624ac05091f3d85d0"],["/2024/05/26/diffusion-model/index.html","33bc5136806df69499f042674a4e379c"],["/2024/05/28/user-malloc/index.html","7374dd8bb3cb242ad34043c8a9bc7dc0"],["/2024/06/05/状态压缩dp/index.html","44fbf13ac8abf1cdf7a7838bd468e90d"],["/2024/06/10/STL/index.html","494a42641f6bc6ad00e2ddd0e350d654"],["/2024/06/30/picture-format/index.html","d2be91f7029074a11375ecacc81a0a10"],["/2024/08/17/GAMES101-Assignment7/index.html","b575c1685e4bec21c464a6d29b3b4b1f"],["/2024/08/18/cpp-thread/index.html","39a2d8b94f1d97432f72b154273c6ccf"],["/2024/09/06/ArdiFan/index.html","720509d1941822b4a9977c1476b561c0"],["/2024/10/22/TA百人计划笔记/index.html","280a87f009236418f834f778fc26db4d"],["/404.html","ea3d1566ad8366b4fa1c82eebc6a411f"],["/about/index.html","ae308602bd548a89b22d72baf5352631"],["/archives/2023/12/index.html","b833784ab4fda92634543b9c94b6d13c"],["/archives/2023/index.html","91911a2ac7d6a715b9c81139699a8160"],["/archives/2024/04/index.html","8bd16558e411e854dac71bc5a856f403"],["/archives/2024/05/index.html","a1b113e57b7ee0bd5b45a0c9b235a851"],["/archives/2024/06/index.html","b6fb335dcdaff769af57e591001cefc5"],["/archives/2024/08/index.html","0d07445ad170f938c64c8dbc8a7ec0cf"],["/archives/2024/09/index.html","3054a4fa56ebb5fe1b5bf4b3b6bd215f"],["/archives/2024/10/index.html","4cb530e1691a677f902feed0531bd79d"],["/archives/2024/index.html","b8c8454d078b274322db6f7a97224eb3"],["/archives/2024/page/2/index.html","7c87ecb3c1f8e4eca4854f0f29ae2250"],["/archives/index.html","0aa036502035d1eb30fb163a982f8e23"],["/archives/page/2/index.html","d9ecc733b92ac1e5d53168f1ad797f8c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","1bb505343feb8de3309b705582bbf06f"],["/categories/CG/index.html","98c4303d1368c2a740d96fa80db6d20b"],["/categories/cpp/index.html","17f7541516cf83448095574d2f81be04"],["/categories/index.html","70edb9810e3b6342cc0b673f3745c1e3"],["/categories/java/index.html","17d5d8dd161983e1224b67cb4028633a"],["/categories/markdown/index.html","b7bea785a0b5231dea7e1035c74bc9dc"],["/categories/python/index.html","e12525883e492bc40f54d5f1fc6efcf3"],["/categories/vim/index.html","79c8fbede426fbdec612e804b45c47ab"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","9d7ff06ac260702ad7268b8c0f1db70a"],["/index.html","b21650017b736cda04c815e089c31464"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","b33723541ba75e4f22fbeed65b1e7cfa"],["/sw-register.js","588168e9eceaf1aaf078d205d359ae64"],["/tags/Android/index.html","9cd5941ee8ac551759e51631acc922d0"],["/tags/Arduino/index.html","e24152e8ca67336b5298e173a9e17b76"],["/tags/OS/index.html","53b1d1619fd3821580cb6281a8277dcf"],["/tags/index.html","048dac36561f2451573b227911032b30"],["/tags/刷题/index.html","668995dbdbeb284e1b60472a0eed785d"],["/tags/前端/index.html","1ea918a8cb18b9eed5287c2fef7fd86f"],["/tags/多线程/index.html","ed649b14fd209e3e105383f5e4675c18"],["/tags/数字图像处理/index.html","b5f2e3e88e77bd897eb4feaa4373a03b"],["/tags/数学/index.html","943f158b6f6e8a1883cde8318bf4a4ac"],["/tags/文本编辑器/index.html","975d0f5296facc21ae7952aef74a8fa8"],["/tags/深度学习/index.html","0ed504351e9a368a3658be61f006d7fd"],["/tags/渲染/index.html","c43810828727b5eac8f1bd85914a5d2c"],["/tags/游戏/index.html","a95dbb85f2c5842a8fce827fcd23831a"],["/tags/算法/index.html","b1a2fd0951a399a409dc10e866d8e74b"],["/tags/语法/index.html","65d09b534da9d4f16c40de0f4525b78e"],["/tags/黄油/index.html","57d0d108aed9b03eab8b9e64c05cfa40"]];
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
