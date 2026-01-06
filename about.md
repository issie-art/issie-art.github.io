---
layout: default
title: 关于我
---

<div class="about-page">
    <h1>关于我</h1>
    
    <div class="about-content">
        <p>我叫吕俊欣（Issie Lv），2006 年出生于湖南邵阳。喜欢编程、阅读、思考、写作和一切与创造相关的东西。小时候的梦想是成为一名黑客，但最终却成为了一名程序员。</p>
        
        <h2>个人经历</h2>
        <ul>
            <li><strong>2020年</strong> - 初中二年级离开了学校，同年五月份去了特训学校</li>
            <li><strong>2021年</strong> - 去电竞学校进修了6个月</li>
            <li><strong>2022年</strong> - 开始接触编程</li>
            <li><strong>2023年</strong> - 开始跑马拉松</li>
            <li><strong>2024年</strong> - 开始健身，12月刚满18岁参加工作，就职于某不知名中厂至今</li>
        </ul>
        
        <h2>未来展望</h2>
        <p>未来希望能够打造一款属于自己的产品，为社会创造价值，现阶段在努力构建工程基础，希望能做一个长期主义者。</p>
        
        <h2>关于这个博客</h2>
        <p>想做这篇博客的原因是将自己的一些拙见与经验分享出去，帮助到其他人，同时写作也是我认为的一种很好的思考方式。</p>
        
        <h2>技能与兴趣</h2>
        <div class="skills">
            <div class="skill-category">
                <h3>编程技术</h3>
                <ul>
                    <li>前端开发（HTML/CSS/JavaScript）</li>
                    <li>后端开发</li>
                    <li>算法与数据结构</li>
                </ul>
            </div>
            <div class="skill-category">
                <h3>个人兴趣</h3>
                <ul>
                    <li>阅读与写作</li>
                    <li>马拉松与健身</li>
                    <li>技术思考与创造</li>
                </ul>
            </div>
        </div>
        
        <h2>联系方式</h2>
        <div class="contact-details">
            <p><strong>邮箱：</strong>xxin778@163.com</p>
            <p><strong>微信：</strong>issie_x</p>
            <p>如果对我的内容感兴趣的话，可以发送邮件到我的邮箱，我会定期进行回复。也可以添加我的微信，我会及时回复。</p>
        </div>
    </div>
</div>

<style>
    .about-page {
        background: white;
        border-radius: 12px;
        padding: 40px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    }
    
    .about-page h1 {
        font-size: 32px;
        color: #2c3e50;
        margin-bottom: 30px;
        padding-bottom: 15px;
        border-bottom: 2px solid #f0f0f0;
    }
    
    .about-content {
        font-size: 16px;
        line-height: 1.8;
        color: #444;
    }
    
    .about-content h2 {
        font-size: 24px;
        margin: 40px 0 20px;
        color: #2c3e50;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    
    .about-content h3 {
        font-size: 18px;
        margin: 20px 0 10px;
        color: #34495e;
    }
    
    .about-content p {
        margin-bottom: 20px;
    }
    
    .about-content ul {
        margin-bottom: 20px;
        padding-left: 20px;
    }
    
    .about-content li {
        margin-bottom: 8px;
    }
    
    .skills {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        margin: 30px 0;
    }
    
    .skill-category {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
    }
    
    .skill-category h3 {
        margin-top: 0;
    }
    
    .contact-details {
        background: #f8f9fa;
        padding: 25px;
        border-radius: 8px;
        margin-top: 20px;
    }
    
    .contact-details p {
        margin-bottom: 10px;
    }
    
    @media (max-width: 768px) {
        .about-page {
            padding: 25px;
        }
        
        .skills {
            grid-template-columns: 1fr;
        }
    }
</style>