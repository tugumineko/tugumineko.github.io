/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","d6076b2b03f66ed47f7433935a331bcd"],["/2024/04/29/markdown-syntax/index.html","5dc1c64315ce7b76f5cf796bf3f5a115"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","9e1481fbcacac7ce065726e96e731f36"],["/2024/05/05/PyTorch深度学习/index.html","48579212dad95ea94f42ed3893c111ce"],["/2024/05/06/python图像处理/index.html","dcc5556b1b74c0bc6752ef27fc91b29b"],["/2024/05/08/the-tour-of-cpp/index.html","cf8e263ffbf3f3834800e5f51fb8ff55"],["/2024/05/19/生活在树上/index.html","be2fd0d739c6d761d08408b78d45e393"],["/2024/05/23/vim-syntax/index.html","b6207f0fddc4056d9420d303bcb9a822"],["/2024/05/25/正则表达式/index.html","43010de2695cf7b14d1c8e1058f9e0da"],["/2024/05/26/diffusion-model/index.html","b563972a585cdef65cc1769477e26edf"],["/2024/05/28/user-malloc/index.html","bcf504b71e01ca6a1a58ad8148baadf5"],["/2024/06/05/状态压缩dp/index.html","aeaad18312416a12f03a3724917586f2"],["/2024/06/10/STL/index.html","86b5c69eebd46005b26c603b58738c99"],["/2024/06/30/picture-format/index.html","6aa97e6a3d414085326007ab2574b8f2"],["/2024/08/17/GAMES101-Assignment7/index.html","48a3cf00bc773959027296c2f0110d31"],["/2024/08/18/cpp-thread/index.html","a9824e6f51221d985a5b9ec12fcecf41"],["/2024/09/06/ArdiFan/index.html","10719a5032f90fb7d0bfdeb3e2e7993e"],["/2024/10/22/TA百人计划笔记/index.html","672e4da71e8695d8d04d1e4c6c73e47e"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","2756106407781e6370c30118f4c8efe5"],["/2024/11/05/cv-concepts/index.html","6fa81f9792006298d72e98ed16b5dcd4"],["/2024/11/11/softras-environment/index.html","c11c394e38d8bf74baa51a06ce647802"],["/2024/11/25/3dgs-sketch/index.html","9668c6a24cf2cbeea5ebf3183efecc1d"],["/2024/12/02/mini-splatting/index.html","67e8c6fc9e207d789531210156667418"],["/2024/12/06/Quadratic-form/index.html","7210deef475220b5a156029991a879ad"],["/2024/12/10/eigenvector-and-determination/index.html","9534c557009565046a09dd28bb67df12"],["/404.html","9fc14fb62590202387ad07d2c499ad6f"],["/about/index.html","7ce48aa56d9777342b3a317f86ea84e8"],["/archives/2023/12/index.html","9f0df05f15193149ceb5489c6b2f36f5"],["/archives/2023/index.html","c842811fe959f34e63d44df8ae6ee8fe"],["/archives/2024/04/index.html","76354d365cd688605c692e46a8d7de6f"],["/archives/2024/05/index.html","d355e80f9917e2e6067b1322236458f9"],["/archives/2024/06/index.html","1a62f21d7c28d44c6c018799e43e579b"],["/archives/2024/08/index.html","57fe7b46f8540502e1ef9e9d2c6b2b39"],["/archives/2024/09/index.html","134aabbff507db47d9647b67f02002e7"],["/archives/2024/10/index.html","7e345f92a896d19a7d55e91c489644c0"],["/archives/2024/11/index.html","a8c190677c3c384687db33b89d01c9e3"],["/archives/2024/12/index.html","dd61af5bcf553de6b66e0a68209136b8"],["/archives/2024/index.html","b71b42e27e79a18f85eaf76014544c1e"],["/archives/2024/page/2/index.html","ca79bb46fe0b4de6679a06ec1307fa4f"],["/archives/2024/page/3/index.html","59fa51b6fe4c715d996925e52dd9c2d4"],["/archives/index.html","0c9dac185d100aab4ed5f1939744d55c"],["/archives/page/2/index.html","09b8a4486471ae4f32eda18ab580b224"],["/archives/page/3/index.html","ad168b86399b9e71b965feb6daa31d6a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","806cf4551f9fcc9b5178d3f5c03c91bc"],["/categories/C/index.html","312cf7aead7688e1c9b98be7869b3566"],["/categories/CG/index.html","d7fb25ba4e00e73227c129db493b8047"],["/categories/cpp/index.html","0fc33e003020a7cb988d8f2a016af0b6"],["/categories/cuda/index.html","c333480b0faa9a3b00062d13f51c9661"],["/categories/cv/index.html","579b487f9472325e8d50da426dcf6510"],["/categories/index.html","fb3a49a9e85c7af4d08016f00e40c644"],["/categories/java/index.html","b181b6862738f800fd48036e29c319d5"],["/categories/markdown/index.html","243c6f526eb82e53672d154b0b5c7b16"],["/categories/python/index.html","291f2cf8e49a53e3e172676a194d7be6"],["/categories/vim/index.html","dcc23976a83796cab4af5c4f7a136812"],["/categories/线性代数/index.html","34fa7b681d260f34b08319d5d09f7fa7"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","6e70dcf0e0a1d4b6d068df5bad374a4c"],["/index.html","eb92e831e8c4668a2c82aa39c9a014a5"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","5b244f1ecd7e063fcbf5dd09ed737ce1"],["/page/3/index.html","fd878ff4cf9887699f659cbddec3dfd4"],["/sw-register.js","ea87ac528d0cd6cbe994bfda69013c15"],["/tags/3dgs/index.html","3caa70ada26e61b4a1636c6080ce8a25"],["/tags/Android/index.html","65cb2227285a96c3c315ef12e2928190"],["/tags/Arduino/index.html","11238e9a44ec2d163b82e4a6d08d2359"],["/tags/OS/index.html","a91b92840cd5f39baa89e298d689f85e"],["/tags/index.html","c27ccf7fbfb304674cfabbf1b2a75614"],["/tags/刷题/index.html","1a633df314a4d803555776fe497bd6a9"],["/tags/前端/index.html","8d1d6b3bdd4f8f5242606eb1146ae1c3"],["/tags/多线程/index.html","59dbf7a765d449c661661c87cf9ab541"],["/tags/数字图像处理/index.html","38caf4ff402d53aa3ccd9a41bac5f38d"],["/tags/数学/index.html","0854365014666490ad7a02b2dd5260a7"],["/tags/文本编辑器/index.html","5598cdf4415528812a6efc76ccc5075f"],["/tags/深度学习/index.html","d05fb3d8bde0cca1e8c64e801bec4b86"],["/tags/渲染/index.html","b9be724bbaebd7b88c722324069e0c17"],["/tags/游戏/index.html","862cb17d8bcab0eaa52e111992068f21"],["/tags/算法/index.html","9fea5bb2ebfd2d54843ba7fa3e1b3492"],["/tags/语法/index.html","1caaa5dde915a42279fa5be249f24ee0"],["/tags/黄油/index.html","f4ed7296eadf65d21ba7de910e2d927b"]];
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
