const PROJECTS = [
    {
        title: "OLLO",
        image: "Ollo-Homepage.png",
        subtitle: "Premium Fashion Store",
        category: "Fashion",
        color: "purple",
        featured: true,
        url: "https://www.ollo.co.in",
        displayUrl: "ollo.co.in",
        desc: "Customized a responsive Shopify fashion storefront with AI-generated variant imagery, video banners, collection architecture, and full mobile-first optimization for a premium brand.",
        highlights: [
            { i: "🎥", l: "Video banner integration" },
            { i: "🤖", l: "AI variant imagery" },
            { i: "📱", l: "Mobile-first design" },
            { i: "🛍️", l: "Collection architecture" }
        ],
        tags: [
            "Video Banners",
            "AI Imagery",
            "Fashion UI",
            "Responsive Design"
        ],
        role: "Theme Customization + UI Enhancement",
    },
    {
        title: "FEYNLAB India",
        image: "Feynlab-Homepage.png",
        subtitle: "Automotive Care Store",
        category: "Automotive",
        color: "blue",
        featured: true,
        url: "https://shop.feynlab.in",
        displayUrl: "shop.feynlab.in",
        desc: "Premium automotive ecommerce with technical product layouts, detailed specification pages, FAQ accordions, trust elements, and fully optimized mobile experience for a professional coating brand.",
        highlights: [
            { i: "🚗", l: "Technical product pages" },
            { i: "❓", l: "FAQ accordions" },
            { i: "✅", l: "Trust badges" },
            { i: "📱", l: "Mobile optimized" }
        ],
        tags: [
            "Technical UI",
            "FAQ System",
            "Automotive",
            "Trust Elements"
        ],
        role: "Shopify Theme Customization + Store Setup",
    },
    {
        title: "DesiKrafts",
        image: "Desikrafts-Homepage.png",
        subtitle: "Handloom Saree Boutique",
        category: "Fashion",
        color: "pink",
        featured: false,
        url: "https://desikrafts.com",
        displayUrl: "desikrafts.com",
        desc: "Responsive fashion ecommerce for a handloom saree brand — curated collection merchandising, product variants, promotional banners, and a mobile-first shopping experience.",
        highlights: [
            { i: "🪡", l: "Handloom showcasing" },
            { i: "🎨", l: "Variant merchandising" },
            { i: "📣", l: "Promotional banners" },
            { i: "📱", l: "Mobile-first layout" }
        ],
        tags: [
            "Fashion Ecommerce",
            "Variant UI",
            "Mobile-first",
            "Collection Pages"
        ],
        role: "Theme Customization + Store Configuration",
    },
    {
        title: "Swastik",
        image: "Swastik-Homepage.png",
        subtitle: "FMCG Grocery Store",
        category: "FMCG",
        color: "amber",
        featured: false,
        url: "https://www.swastiks.com",
        displayUrl: "swastiks.com",
        desc: "End-to-end Shopify setup for an FMCG brand — product catalog management, responsive UI, policy pages, structured navigation, and complete storefront configuration.",
        highlights: [
            { i: "🛒", l: "End-to-end setup" },
            { i: "📋", l: "Policy page setup" },
            { i: "🗺️", l: "Navigation structuring" },
            { i: "📦", l: "Catalog management" }
        ],
        tags: [
            "FMCG",
            "Store Setup",
            "Catalog Management",
            "Navigation"
        ],
        role: "Full Store Setup + Catalog Architecture",
    },
    {
        title: "Yuvan Food Products",
        image: "YuvanFoods-Homepage.png",
        subtitle: "Food Products Ecommerce",
        category: "FMCG",
        color: "teal",
        featured: false,
        url: "https://yuvanfoodproducts.com",
        displayUrl: "yuvanfoodproducts.com",
        desc: "Built a responsive Shopify storefront for a food brand — category organization, policy pages, optimized product layouts, navigation setup, and full mobile enhancements from scratch.",
        highlights: [
            { i: "🌾", l: "Food product catalog" },
            { i: "📐", l: "Optimized layouts" },
            { i: "📱", l: "Mobile responsive" },
            { i: "🗂️", l: "Category organization" }
        ],
        tags: [
            "FMCG",
            "Product Management",
            "Responsive",
            "Mobile"
        ],
        role: "Store Setup + Mobile Optimization",
    },
    {
        title: "QuickStrings",
        image: "Quickstring-Homepage.png",
        subtitle: "Sports Equipment Megastore",
        category: "Sports",
        color: "green",
        featured: true,
        url: "https://quickstring.myshopify.com",
        displayUrl: "quickstring.myshopify.com",
        desc: "Large-scale Shopify sports store with 1000+ badminton & racket products, metafield architecture, mega menu navigation, advanced filtering, and a custom-built tension calculator web app.",
        highlights: [
            { i: "📦", l: "1000+ SKUs managed" },
            { i: "🔧", l: "Custom tension calculator" },
            { i: "🗂️", l: "Shopify Metafields" },
            { i: "📱", l: "Mega Menu Navigation" }
        ],
        tags: [
            "Metafields",
            "Mega Menu",
            "Custom Web App",
            "Product Filters",
            "Large Catalog"
        ],
        role: "Theme Development + Catalog Architecture",
    },
    {
        title: "9Balls India",
        image: "9Balls-India-Homepage.png",
        subtitle: "Sports & Gaming Store",
        category: "Sports",
        color: "coral",
        featured: false,
        url: "https://9balls-india.myshopify.com",
        displayUrl: "9balls-india.myshopify.com",
        desc: "Multi-category Shopify storefront for indoor sports and gaming products — responsive layouts, product merchandising, modern navigation, and clean shopping experience.",
        highlights: [
            { i: "🎱", l: "Multi-category structure" },
            { i: "🎮", l: "Sports & gaming UI" },
            { i: "📱", l: "Responsive layout" },
            { i: "🛍️", l: "Product merchandising" }
        ],
        tags: [
            "Sports",
            "Multi-category",
            "Responsive",
            "Merchandising"
        ],
        role: "Theme Customization + Store Configuration",
    },
    {
        title: "Popy",
        image: "Popy-Homepage.png",
        subtitle: "Umbrella & Accessories Store",
        category: "Fashion",
        color: "blue",
        featured: false,
        url: "https://popy-online.myshopify.com",
        displayUrl: "popy-online.myshopify.com",
        desc: "Responsive Shopify store with delivery estimator integration, trust-building UI, conversion-focused product layouts, and fully optimized mobile shopping experience.",
        highlights: [
            { i: "🚚", l: "Delivery estimator" },
            { i: "🛡️", l: "Trust badge setup" },
            { i: "📱", l: "Mobile optimized" },
            { i: "💡", l: "Conversion UI" }
        ],
        tags: [
            "Delivery Estimator",
            "Trust Badges",
            "Mobile",
            "Conversion"
        ],
        role: "Theme Customization + App Integration",
    },
    {
        title: "Men Fashion",
        image: "Men-Fashion-Homepage.png",
        subtitle: "Practice & Portfolio Store",
        category: "Fashion",
        color: "gray",
        featured: false,
        url: "https://ankur-practice-store.myshopify.com",
        displayUrl: "ankur-practice-store.myshopify.com",
        desc: "Personal Shopify dev store for hands-on learning — experimenting with custom sections, OS 2.0, variant swatches, size charts, trust badges, and advanced merchandising techniques.",
        highlights: [
            { i: "🧪", l: "Custom sections testing" },
            { i: "🎨", l: "Variant swatches" },
            { i: "📏", l: "Custom size charts" },
            { i: "🌑", l: "Dark luxury theme" }
        ],
        tags: [
            "OS2.0",
            "Custom Sections",
            "Variant Swatches",
            "Dev Store"
        ],
        role: "Personal Dev Store – Hands-on Learning",
    }
];

const CASE_STUDIES = [
    {
        title: "Men Fashion",
        type: "Complete Development Store Build",
        url: "https://ankur-practice-store.myshopify.com",
        caseDesc: "Built and customized the entire Shopify development store including homepage, product pages, collection pages, variant swatches, trust badges, custom sections, luxury dark UI, responsive design, and storefront architecture.",
        responsibilities: [
            "• Homepage Development",
            "• Product Page Customization",
            "• Collection Pages",
            "• Variant Swatches",
            "• Custom Sections",
            "• Responsive Optimization"
        ],
        technicalWork: [
            "• Shopify Liquid",
            "• Online Store 2.0",
            "• Custom Sections",
            "• Responsive Design",
            "• HTML/CSS/JS",
            "• Ecommerce UX"
        ],
        metrics: ["100%", "Custom Store", "Luxury UI"]
    },
    {
        title: "QuickStrings",
        type: "Catalog Management & Custom App",
        url: "https://quickstring.myshopify.com",
        caseDesc: "Worked on large-scale Shopify catalog management dealing with Tennis, Badminton, and racket sports. Built complex metafield architecture, advanced product filters, multi-level navigation, and a custom tension calculator.",
        responsibilities: [
            "• Product Catalog Management",
            "• Metafield Architecture",
            "• Product Filters Setup",
            "• Mega Menu Structuring",
            "• Bulk Product Organization",
            "• Collections Setup"
        ],
        technicalWork: [
            "• Shopify Liquid",
            "• Online Store 2.0",
            "• Metafield Architecture",
            "• Custom Web App",
            "• Navigation Structuring",
            "• Advanced Filtering"
        ],
        metrics: ["1000+ SKUs", "Sports Catalog", "Advanced Filters"]
    },
    {
        title: "OLLO",
        type: "Theme Customization & UI Enhancement",
        url: "https://www.ollo.co.in",
        caseDesc: "Customized a premium responsive Shopify storefront for fashion apparel, implementing AI variant imagery, video banner integrations, clean collection hierarchy, and extensive UI polish for enhanced conversion rates.",
        responsibilities: [
            "• Theme Customization",
            "• Video Banner Integration",
            "• AI Variant Image Handling",
            "• Collection Architecture",
            "• Mobile UI Polish",
            "• Conversion Optimization"
        ],
        technicalWork: [
            "• Liquid Templates",
            "• Video Integrations",
            "• AI Asset Processing",
            "• Collection Setup",
            "• Custom CSS Styling",
            "• Responsive Frameworks"
        ],
        metrics: ["Premium UI", "Fashion Store", "AI Imagery"]
    },
    {
        title: "FEYNLAB India",
        type: "Store Setup & Technical UX",
        url: "https://shop.feynlab.in",
        caseDesc: "Designed and built an automotive care ecommerce store featuring highly detailed technical product specification tables, customized product pages, trust badges, FAQs, and a highly conversion-optimized mobile checkout flow.",
        responsibilities: [
            "• Shopify Store Setup",
            "• Technical Product Layouts",
            "• Specification Tables",
            "• FAQ Accordion System",
            "• Trust Badges Integration",
            "• Checkout Flow Optimization"
        ],
        technicalWork: [
            "• Shopify Theme Dev",
            "• Technical UI/UX",
            "• Custom Accordions",
            "• Trust Elements",
            "• Mobile Responsiveness",
            "• App Configurations"
        ],
        metrics: ["Professional", "Automotive", "Trust Badges"]
    },
    {
        title: "DesiKrafts",
        type: "Theme Customization & Branding",
        url: "https://desikrafts.com",
        caseDesc: "Delivered a beautiful Shopify boutique for handloom sarees. Built custom product swatches, elegant collection grids, promotional banner systems, and a fully polished mobile shopping experience to reflect traditional handloom heritage.",
        responsibilities: [
            "• Theme Customization",
            "• Variant Merchandising",
            "• Custom Color Swatches",
            "• Collection Page Layouts",
            "• Promotional Banner Setup",
            "• Handloom Showcasing"
        ],
        technicalWork: [
            "• Liquid Snippets",
            "• Swatch Customization",
            "• Grid Styling",
            "• Media Customization",
            "• CSS Customizations",
            "• Storefront Styling"
        ],
        metrics: ["Elegant UI", "Handloom Saree", "Variant UI"]
    },
    {
        title: "Swastik",
        type: "End-to-End Store Setup",
        url: "https://www.swastiks.com",
        caseDesc: "Created an end-to-end Shopify FMCG grocery store solution. Engineered structured navigation, clean product information pages, catalog upload operations, policy configurations, and shipping rule setups.",
        responsibilities: [
            "• Full Store Setup",
            "• Navigation Structuring",
            "• Policy Page Generation",
            "• Product Catalog Loading",
            "• Shipping Rules Config",
            "• Tax Configuration"
        ],
        technicalWork: [
            "• Shopify Settings",
            "• CSV Catalog Ops",
            "• Navigation Menus",
            "• Legal Integrations",
            "• Basic SEO Setup",
            "• Default Theme Setup"
        ],
        metrics: ["FMCG Brand", "Full Setup", "Catalog Ops"]
    },
    {
        title: "Yuvan Food Products",
        type: "Store Build & Catalog Ops",
        url: "https://yuvanfoodproducts.com",
        caseDesc: "Constructed a highly organized Shopify store for food products. Built custom product grids, streamlined checkout, policy pages, shipping configurations, and complete catalog operations with deep mobile responsiveness.",
        responsibilities: [
            "• Store Build & Setup",
            "• Food Category Structuring",
            "• Product Grid Layouts",
            "• Checkout Optimizations",
            "• Bulk CSV Importation",
            "• Mobile Layout Polish"
        ],
        technicalWork: [
            "• Shopify Liquid Setup",
            "• Catalog Architecture",
            "• CSS Flexbox Grid",
            "• Checkout Customizer",
            "• Bulk Product Data",
            "• Mobile Styling"
        ],
        metrics: ["Responsive", "Food Catalog", "Bulk Setup"]
    },
    {
        title: "9Balls India",
        type: "Theme Customization & Navigation",
        url: "https://9balls-india.myshopify.com",
        caseDesc: "Developed a multi-category Shopify storefront for indoor sports and gaming gear. Designed rich navigation, collection filters, optimized category structure, and interactive product grids for a premium gaming experience.",
        responsibilities: [
            "• Theme Customization",
            "• Multi-category Structure",
            "• Product Merchandising",
            "• Navigation Configuration",
            "• Filter Optimization",
            "• Storefront Styling"
        ],
        technicalWork: [
            "• Liquid Coding",
            "• Advanced Navigation",
            "• Filtering Options",
            "• CSS Grid Layouts",
            "• Asset Optimization",
            "• Store Merchandising"
        ],
        metrics: ["Sports UI", "Multi-category", "Merchandising"]
    },
    {
        title: "Popy",
        type: "Theme Customization & App Integration",
        url: "https://popy-online.myshopify.com",
        caseDesc: "Integrated delivery estimator app, trust-building widgets, custom specifications tables, and optimized responsive checkout layouts on a highly visited Shopify store for an established umbrella brand.",
        responsibilities: [
            "• Theme Customization",
            "• App Integration",
            "• Trust Badge Layouts",
            "• Conversion UI Work",
            "• Delivery Time Widgets",
            "• Performance Tuning"
        ],
        technicalWork: [
            "• Liquid Scripting",
            "• App Snippet Embeds",
            "• Trust Badge Assets",
            "• Styling Updates",
            "• Third-party Integration",
            "• Mobile Optimization"
        ],
        metrics: ["Conversion UI", "App Integration", "Trust Setup"]
    }
];
