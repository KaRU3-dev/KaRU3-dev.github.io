const data = [
    {
        "post-name": "私について",
        "post-short": "KaRU3とは誰か？を紹介している記事です。",
        "link": "./posts/1-about-me.html",
        "created-at": "2025-08-21",
    },
    {
        "post-name": "BlazorページにgRPCクライアントを埋め込む",
        "post-short": "BlazorページにgRPCクライアントを埋め込む方法を紹介しています。",
        "link": "./posts/2-grpc-with-blazor.html",
        "created-at": "2025-08-21",
    },
    {
        "post-name": "分散サービス上でのgRPC認証",
        "post-short": "ASP.NET CoreでgRPC認証ハンドラを作成する方法を紹介しています。",
        "link": "./posts/3-grpc-auth.html",
        "created-at": "2025-08-22",
    },
    {
        "post-name": "ASP.NET Coreのデバッグ用のSSL(HTTPS)の有効化",
        "post-short": "ASP.NET Coreで自己署名証明書を生成する方法を紹介しています。",
        "link": "./posts/4-debug-ssl.html",
        "created-at": "2025-08-24",
    }
];

window.onload = function () {
    console.log("Page loaded, initializing posts...");
    const container = document.querySelector('.post-container');
    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const title = document.createElement('h2');
        title.textContent = post['post-name'];

        const description = document.createElement('p');
        description.textContent = post['post-short'];

        const link = document.createElement('a');
        link.href = post.link;
        link.textContent = 'Read more';

        const createdAt = document.createElement('p');
        createdAt.textContent = 'Created at: ' + post['created-at'];

        // const tags = document.createElement('p');
        // tags.textContent = 'Tags: ' + post.tags.join(', ');

        postElement.appendChild(title);
        postElement.appendChild(createdAt);
        postElement.appendChild(description);
        postElement.appendChild(link);
        // postElement.appendChild(tags);

        container.appendChild(postElement);
    });
}

function onSearchExec() {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value.toLowerCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const description = post.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchValue) || description.includes(searchValue)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

function onSearchInput() {
    const searchInput = document.getElementById('search-input');
    if (searchInput.value.length > 0) {
        onSearchExec();
    } else {
        const posts = document.querySelectorAll('.post');
        posts.forEach(post => {
            post.style.display = 'block';
        });
    }
}

function Inject() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', onSearchInput);
    } else {
        console.error("Search input element not found.");
    }
}
Inject();
