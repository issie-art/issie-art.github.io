---
layout: default
title: 所有文章
---

<div class="archive-header">
    <h1>所有文章</h1>
    <p>按时间顺序排列的所有博客文章</p>
</div>

<div class="archive-list">
    {% if site.posts.size > 0 %}
        {% for post in site.posts %}
        <article class="archive-item">
            <h2 class="archive-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h2>
            <div class="archive-meta">
                <time datetime="{{ post.date | date_to_xmlschema }}">
                    {{ post.date | date: "%Y年%m月%d日" }}
                </time>
                {% if post.categories %}
                <span class="archive-categories">
                    分类：{{ post.categories | join: ", " }}
                </span>
                {% endif %}
            </div>
            <div class="archive-excerpt">
                {{ post.excerpt | strip_html | truncate: 150 }}
            </div>
        </article>
        {% endfor %}
    {% else %}
        <div class="no-posts">
            <p>暂无文章，正在准备中...</p>
            <p>欢迎通过左侧联系方式与我交流</p>
        </div>
    {% endif %}
</div>

<style>
    .archive-header {
        margin-bottom: 40px;
    }
    
    .archive-header h1 {
        font-size: 32px;
        color: #2c3e50;
        margin-bottom: 10px;
    }
    
    .archive-header p {
        color: #7f8c8d;
        font-size: 16px;
    }
    
    .archive-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .archive-item {
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .archive-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .archive-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #2c3e50;
    }
    
    .archive-title a {
        color: inherit;
        text-decoration: none;
    }
    
    .archive-title a:hover {
        color: #3498db;
    }
    
    .archive-meta {
        font-size: 13px;
        color: #95a5a6;
        margin-bottom: 12px;
        display: flex;
        gap: 15px;
        align-items: center;
    }
    
    .archive-excerpt {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
    }
</style>