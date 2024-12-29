/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/23/素晴らしき日々/index.html","7cbfa4acbd697c9665ec4e77842178a3"],["/2024/04/29/markdown-syntax/index.html","7988ebb89ad5ea6eae7599c65ea861d3"],["/2024/05/05/A-Rigorous-Derivation-of-the-Bubble-Sort-Curve/index.html","551380f3641ef496d7db5fe38ed55381"],["/2024/05/05/PyTorch深度学习/index.html","d9b5c0f67bcb1aa8bf2877d14347717c"],["/2024/05/06/python图像处理/index.html","3c3f02b005108f5ad59e7cd140cb4c27"],["/2024/05/08/the-tour-of-cpp/index.html","08fa3f786215119d807b7c109cbff4b1"],["/2024/05/19/生活在树上/index.html","9b3366e8cdc943d61c7f2c43533afe1e"],["/2024/05/23/vim-syntax/index.html","02c653986ab73ff6e8f3a75a640484de"],["/2024/05/25/正则表达式/index.html","c398620ae2c749fa54578d647d309207"],["/2024/05/26/diffusion-model/index.html","bbf49456c756867097d28af74bae65c6"],["/2024/05/28/user-malloc/index.html","ab51c1c8d456fe25dac63f7629de898d"],["/2024/06/05/状态压缩dp/index.html","27359de5feb567e4eb56be5b281fbc4d"],["/2024/06/10/STL/index.html","7733e3307cbebd1e286f0ff71e5dec9b"],["/2024/06/30/picture-format/index.html","aae4a36f1ecb580952bd9c8f0cb972dc"],["/2024/08/17/GAMES101-Assignment7/index.html","1f622469e9f6eb83e729f78d45d55693"],["/2024/08/18/cpp-thread/index.html","0b37bedf46f4ad3e6f4760e44d4f42fc"],["/2024/09/06/ArdiFan/index.html","8904e08d49c64ca4dc84af1b2ece255d"],["/2024/10/22/TA百人计划笔记/index.html","c1224c26d0333f96a9fdabf904a774ca"],["/2024/11/05/3dgs-real-time-radiance-rendering/index.html","66db6a48c347335c1a3204d19318b7f2"],["/2024/11/05/cv-concepts/index.html","6c62ebbf989d213ce0d56179890a923b"],["/2024/11/11/softras-environment/index.html","5e8a5e271b0bbff2d498086fc2eb314e"],["/2024/11/25/3dgs-sketch/index.html","1fbddf88ee3e9815c1f66c173983c25a"],["/2024/12/02/mini-splatting2/index.html","db401f40ae496fda5570489e2a91687b"],["/2024/12/06/Quadratic-form/index.html","64473ee4f0009f84f3671a1f43b9142a"],["/2024/12/10/eigenvector-and-determination/index.html","1acf862ade90d805668ab701d58dfac3"],["/404.html","3128b81a0fe3157ba8b483b1e0eb3fc2"],["/about/index.html","95caee977b1fc4ffd912034d516f3c6e"],["/archives/2023/12/index.html","e4a4be6c398ce320bab7946a27c6d280"],["/archives/2023/index.html","44b0c13c52ae8d66cc8e8e18b4e71ea6"],["/archives/2024/04/index.html","09f4d46ae8e1b50c3f2f6c2833a879cc"],["/archives/2024/05/index.html","c70a87fdc0b90dfaf12e1b6e1659fc9f"],["/archives/2024/06/index.html","e21a75459cc9dbac5e39cb9a26cbcfd4"],["/archives/2024/08/index.html","f34efe571c7521b6fec895b97540b77f"],["/archives/2024/09/index.html","13756ee4e490261e5a9710efe9544f86"],["/archives/2024/10/index.html","23687a1fde3c4286926f161a61f852f1"],["/archives/2024/11/index.html","07b48f94bacf31786c2b98c849a08776"],["/archives/2024/12/index.html","975c363a03664a63369f41fe018fcec8"],["/archives/2024/index.html","f274baff08bd00eb0778749b55621229"],["/archives/2024/page/2/index.html","4c50802452f050129be7ff16ebaaf0eb"],["/archives/2024/page/3/index.html","c111fa289bedecd90de619287026ff84"],["/archives/index.html","f7c00d8bc7bb529a37f5a9242c913e10"],["/archives/page/2/index.html","cb08ce9fd71e1845916ac5eb23ef9730"],["/archives/page/3/index.html","e15d22c0d880e95e6a8e456efdaf2290"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/3DV/index.html","d502f4bba4d88ea711852f39f14d5315"],["/categories/C/index.html","fc33fd46feb1c7ee45606b56b53783bc"],["/categories/CG/index.html","60a8fca993c1b4fc2511ee5c4a57ff49"],["/categories/cpp/index.html","e2b3db963e65749065cc1217ff1aff21"],["/categories/cuda/index.html","e7747c492e8f5056a69aeb93e7a0532a"],["/categories/cv/index.html","ae2dc677817395f469d8cad468962f2d"],["/categories/index.html","6ff4802dfd359f44631defefc0dee089"],["/categories/java/index.html","ce0d7e25b5df32d50c36267261ebf22b"],["/categories/markdown/index.html","5142bea9892c39d24c111cb3b4782f89"],["/categories/python/index.html","8ce9c3bedc0079a69276b2c1cec858d4"],["/categories/vim/index.html","9bc784b54df68f080e5015044d872639"],["/categories/线性代数/index.html","4ebef37273e3107e89592664509fc8dd"],["/css/Readme.html","eb2265a538825081fde02fd49461cd5c"],["/css/first.css","129e0f40fc79f73256b67b497598f7f6"],["/css/style.css","a5cb460c0b36bdb53fceeba6f7d625d0"],["/friends/index.html","e59933717dd6034ddbdc73d2ce0b6d3a"],["/index.html","698fb903bf38533775268449558ecc03"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/snow.js","7d921b160c925543556956ce1f50544c"],["/page/2/index.html","394ed90b16a8ee6a66c3dcf01e17c605"],["/page/3/index.html","7b0061c09022559b961e769c0d10be1f"],["/sw-register.js","075eb9893b15fcc0b1b183370a38e95a"],["/tags/3dgs/index.html","e917aa5060a940116e1eb6710c4982ff"],["/tags/Android/index.html","bb7792a152c02352ea407540bd81bf36"],["/tags/Arduino/index.html","e41c23085c73c329e05351f170abc2cf"],["/tags/OS/index.html","80450b3d0672cf7a80dc457e7a009091"],["/tags/index.html","b6d9f35985a3a98b5d0ae596990028a2"],["/tags/刷题/index.html","cc5b231589a7227a8e668ef317f6f967"],["/tags/前端/index.html","c62a5f6076ad8957543ab6423d4ce537"],["/tags/多线程/index.html","ab2a54ae2a243da84261aa24eef0db61"],["/tags/数字图像处理/index.html","2b14321a547166c7e506946d02f17d19"],["/tags/数学/index.html","f881636f6f2fc2a352fb760e3b85979d"],["/tags/文本编辑器/index.html","03d7593881b7f311d0e4d13cb9cf1992"],["/tags/深度学习/index.html","67f3fc948352fb896b1ff9c63ccdcd8b"],["/tags/渲染/index.html","3ede816b2294acf66eb6fa5d8c35a948"],["/tags/游戏/index.html","7fc98f82873f891a2dd9d0dd0ae79382"],["/tags/算法/index.html","16f3c42439cbafd8d3dcee029405202a"],["/tags/语法/index.html","c3dc622d20a3d2e940cad758529a1d7d"],["/tags/黄油/index.html","09d89ad2ae270d4c6e671d8b09a64726"]];
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
