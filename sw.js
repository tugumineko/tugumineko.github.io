/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","5ad5e66718a44dc84b8666e7f55ffd1f"],["/2024/04/29/markdown-syntax/index.html","bb773d71510da82cfadc37d5aed84763"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","edf763c725cda61bd288f82c4b351adb"],["/2024/05/05/PyTorch深度学习/index.html","ce78ea245b7e025b3e0a6d1a86314366"],["/2024/05/06/python图像处理/index.html","ecbd0793381ab3d816a29261bb5f3df3"],["/2024/05/08/the-tour-of-cpp/index.html","39b81be90ffc9a9f3af2e417229eadc8"],["/2024/05/19/生活在树上/index.html","4781d72b6e582dd1eb227667f4c6981c"],["/2024/05/23/vim-syntax/index.html","5b74aa5a48935a85b3d0eb13cd5acf92"],["/2024/05/25/正则表达式/index.html","d80e71352a14fb224f6359ff4c1812cc"],["/2024/05/26/diffusion-model/index.html","26f74290e1daa568a290295f8165715a"],["/2024/05/28/user-malloc/index.html","2cbb4d918ddf2f0a8b21d06a0399b3e6"],["/2024/06/05/状态压缩dp/index.html","69043ddbd330311ff8ea1da35207bc99"],["/2024/06/10/STL/index.html","417d024ebd3d8d0494acd112e8ef0c67"],["/2024/06/30/picture-format/index.html","94e9d7029e6ff8e63af733df790af440"],["/2024/08/17/GAMES101-Assignment7/index.html","f47aa680d7a456989562ff430eb585e8"],["/2024/08/18/cpp-thread/index.html","b0d8882804fcc6bab1f3f0be9dcc24fe"],["/2024/09/06/ArdiFan/index.html","e86c27968848329b2bfe909d774e4413"],["/2024/10/22/TA百人计划笔记/index.html","3f87d02cfdea96d0c95fd9917bfb0b20"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","f8e8fa365e36aa0c63efa7355b5bafbf"],["/2024/11/05/cv-concepts/index.html","2c29b4a8991d6f0aa62eb81082318d59"],["/2024/11/11/softras-environment/index.html","14f6e8b4d256c5bf2f82105fc9580676"],["/2024/11/25/3dgs-sketch/index.html","290723eb46222222d194d7a5283591fd"],["/2024/12/02/mini-splatting/index.html","41b96754c29d258fac1d7d9bdefcb71a"],["/2024/12/06/Quadratic-form/index.html","fa94db89f70072b4fe4b7ea08061068d"],["/2024/12/10/eigenvector-and-determination/index.html","bb2c4b2f4ae7e1b65525ae33660872d1"],["/404.html","19fb86b37b184522b635cfb2642aea16"],["/about/index.html","081b9d6dbff9146115b5bd3a468277fe"],["/archives/2023/12/index.html","8c8aae82c78620fcfa8a59ba1e4c4b8a"],["/archives/2023/index.html","9d38c760f94153c5a8540441f397a42d"],["/archives/2024/04/index.html","940d47a535a7b062ecc065f22205db24"],["/archives/2024/05/index.html","45e1fa9b4bf3c33a088367db95fe401b"],["/archives/2024/06/index.html","29d269f511fa25f24dfe5779fc354964"],["/archives/2024/08/index.html","743a22cfda7cdfdeba2003c1866921c5"],["/archives/2024/09/index.html","0fcc5c410bb93a12feca56578cdbae70"],["/archives/2024/10/index.html","fbb01d54f14f255b57eba6934a87a72b"],["/archives/2024/11/index.html","d8b06e06d54547dac356655d1fdf5734"],["/archives/2024/12/index.html","aa1c9a8447a1d807dfe4c7049ddbb26a"],["/archives/2024/index.html","20718cc399b0ceb0917d3215667ce26d"],["/archives/2024/page/2/index.html","5d83da9ade924a7ad704919ef771fe8b"],["/archives/2024/page/3/index.html","d8bc13bbd28a92ec52355453724dec1f"],["/archives/index.html","e266a5eaa2ea195be28646eedf065dba"],["/archives/page/2/index.html","e3609a583542a6f89519094ba11071c4"],["/archives/page/3/index.html","6e951e7dd1c80bf67b6d977dabf5dba3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","ecca0589f0eba001ec0f630dd14f7fbe"],["/categories/C/index.html","49539d8a6fda2e20bf4af4bbb7f3c076"],["/categories/CG/index.html","86cf54398ef90762e904e840e08c29cf"],["/categories/cpp/index.html","8121e545a83d62705a7e56393291ebad"],["/categories/cuda/index.html","f1801e580d9e8e86e506b1a9e010629f"],["/categories/cv/index.html","815a79ffac5fb5a47beef377d7f7cf8d"],["/categories/index.html","4ddd973e547377010208b2976d64e034"],["/categories/java/index.html","ff3272c682f65d786eee805aa580dd09"],["/categories/markdown/index.html","0e5ce83586be4263a29fb4883bc13e0b"],["/categories/python/index.html","55829e60d2b1cfbb2e59590a698982ed"],["/categories/vim/index.html","ba6b2ebea4e8876f67aae6e6b931b79b"],["/categories/线性代数/index.html","5fdfe1fb7c4cd8829e768e5a8b8fb74c"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","8440f343c4cf67877328e32a0e51d668"],["/index.html","631287522f4422f2b8453bddc09a6983"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","cdd6a4e2b0acb16fe4bbfe5636c0f6ec"],["/page/3/index.html","80ca69d14431813731a5bf392cc69b3f"],["/sw-register.js","777aacf0277461c05de80f5247055086"],["/tags/3dgs/index.html","5f4143c61845d31c052c18f18b3a622a"],["/tags/Android/index.html","21133ffdb75b5f24b4125581a65f2d8b"],["/tags/Arduino/index.html","9d5fa89f750cacd297c5fbb1675aab97"],["/tags/OS/index.html","16aa7cc115e26b118dedb17bf97cdfc8"],["/tags/index.html","80c0d4f72470d1fd68fded92b9897eb0"],["/tags/刷题/index.html","d67695c1be384862bae293c5ebed3bbd"],["/tags/前端/index.html","bae80dc47c73a6e6a4957c11da324555"],["/tags/多线程/index.html","4c691b0d26cd7329d39637f00638b139"],["/tags/数字图像处理/index.html","1619cf09ce980731f1dbc51d6ff94281"],["/tags/数学/index.html","0a13acabd6ac8b7fb43389ab535a2ac1"],["/tags/文本编辑器/index.html","c3aecd18f6976d565d70a3fc9243869f"],["/tags/深度学习/index.html","2c4fbcb6b29f5dcf56a79f2a5ffe042f"],["/tags/渲染/index.html","5b9ab9cecd1d9cd2b730bac3a6acba61"],["/tags/游戏/index.html","26829132be5200d2cd688bf4edd90acd"],["/tags/算法/index.html","badef43f390afaae085c491d8e05c83c"],["/tags/语法/index.html","e9a42d0a094f571febd7693396cf4ea1"],["/tags/黄油/index.html","83c303702dfd269000ef4d7010d92cdb"]];
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
