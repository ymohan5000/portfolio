// Blog rendering and detail modal functions
var blogsShowAll = false;
var BLOGS_PER_PAGE = 10;

function renderBlogs() {
  blogsShowAll = false;
  _drawBlogs();
}

function toggleAllBlogs() {
  blogsShowAll = !blogsShowAll;
  _drawBlogs();
}

function _drawBlogs() {
  var grid = document.getElementById('blogsGrid');
  var wrap = document.getElementById('blogsViewAllWrap');
  var text = document.getElementById('blogsViewAllText');
  var icon = document.getElementById('blogsViewAllIcon');
  var list = blogsShowAll ? BLOGS : BLOGS.slice(0, BLOGS_PER_PAGE);

  grid.innerHTML = list.map(function(b, i) {
    return '<div class="blog-card fade-in" style="transition-delay:' + (i % 10) * 0.06 + 's" onclick="openBlogDetail(' + b.id + ')">' +
      '<div class="blog-img">' +
        '<div class="placeholder-img" style="background:linear-gradient(135deg,' + b.color + '22,' + b.color + '08);">' +
          '<div class="blog-icon-wrap"><i class="' + b.icon + '" style="color:' + b.color + ';"></i></div>' +
        '</div>' +
        '<img src="' + b.img + '" alt="' + b.title + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:20px;z-index:1;" loading="lazy" onerror="this.style.display=\'none\'">' +
        '<span class="blog-cat-badge">' + b.category + '</span>' +
        '<span class="blog-num-badge">' + String(b.id).padStart(2, '0') + '</span>' +
      '</div>' +
      '<div class="blog-body">' +
        '<div class="blog-meta">' +
          '<span><i class="uil uil-calendar-alt"></i> ' + b.date + '</span>' +
          '<span><i class="uil uil-clock"></i> ' + b.readTime + '</span>' +
        '</div>' +
        '<div class="blog-title">' + b.title + '</div>' +
        '<div class="blog-excerpt">' + b.excerpt + '</div>' +
        '<div class="blog-footer">' +
          '<button class="read-more" onclick="event.stopPropagation();openBlogDetail(' + b.id + ')">Read More <i class="uil uil-arrow-right"></i></button>' +
          '<span class="badge">' + b.category + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  if (BLOGS.length <= BLOGS_PER_PAGE) {
    wrap.style.display = 'none';
  } else {
    wrap.style.display = 'flex';
    if (blogsShowAll) {
      text.textContent = 'Show Less';
      icon.className = 'uil uil-angle-up';
    } else {
      text.textContent = 'View All Blogs (' + BLOGS.length + ')';
      icon.className = 'uil uil-eye';
    }
  }
  observeFadeIns();
}

function openBlogDetail(id) {
  var blog = BLOGS.find(function(b) { return b.id === id; });
  if (!blog) return;
  var modal = document.getElementById('blogDetailModal');
  var idx = BLOGS.findIndex(function(b) { return b.id === id; });
  var prev = idx > 0 ? BLOGS[idx - 1] : null;
  var next = idx < BLOGS.length - 1 ? BLOGS[idx + 1] : null;
  var content = getBlogContent(id);

  var sidebar = BLOGS.map(function(b, i) {
    return '<li class="' + (b.id === id ? 'active' : '') + '">' +
      '<a href="javascript:void(0)" onclick="openBlogDetail(' + b.id + ')">' +
        '<span class="sidebar-num">' + (i + 1) + '</span>' + b.title +
      '</a></li>';
  }).join('');

  var footerNav = '';
  if (prev || next) {
    footerNav = '<div class="blog-detail-footer-nav">';
    if (prev) {
      footerNav += '<div class="blog-nav-card" onclick="openBlogDetail(' + prev.id + ')">' +
        '<div class="blog-nav-card-label"><i class="uil uil-arrow-left"></i> Previous</div>' +
        '<div class="blog-nav-card-title">' + prev.title + '</div></div>';
    } else {
      footerNav += '<div></div>';
    }
    if (next) {
      footerNav += '<div class="blog-nav-card next" onclick="openBlogDetail(' + next.id + ')">' +
        '<div class="blog-nav-card-label">Next <i class="uil uil-arrow-right"></i></div>' +
        '<div class="blog-nav-card-title">' + next.title + '</div></div>';
    } else {
      footerNav += '<div></div>';
    }
    footerNav += '</div>';
  }

  modal.innerHTML =
    '<div class="blog-detail-topbar">' +
      '<div class="blog-detail-topbar-left">' +
        '<button class="blog-detail-back" onclick="closeBlogDetail()"><i class="uil uil-arrow-left"></i> Back</button>' +
        '<span class="blog-detail-topbar-title">' + blog.title + '</span>' +
      '</div>' +
      '<div class="blog-detail-topbar-right">' +
        '<button class="blog-detail-nav-btn" ' + (prev ? 'onclick="openBlogDetail(' + prev.id + ')"' : 'disabled') + '><i class="uil uil-arrow-left"></i> <span>Prev</span></button>' +
        '<button class="blog-detail-nav-btn" ' + (next ? 'onclick="openBlogDetail(' + next.id + ')"' : 'disabled') + '><span>Next</span> <i class="uil uil-arrow-right"></i></button>' +
      '</div>' +
    '</div>' +
    '<div class="blog-detail-layout">' +
      '<aside class="blog-detail-sidebar">' +
        '<div class="blog-sidebar-title">📚 All Tutorials</div>' +
        '<ul class="blog-sidebar-list">' + sidebar + '</ul>' +
      '</aside>' +
      '<article class="blog-detail-content">' +
        '<div class="blog-detail-header">' +
          '<div class="blog-detail-cat"><i class="' + blog.icon + '"></i> ' + blog.category + '</div>' +
          '<h1 class="blog-detail-h1">' + blog.title + '</h1>' +
          '<div class="blog-detail-meta">' +
            '<span><i class="uil uil-calendar-alt"></i> ' + blog.date + '</span>' +
            '<span><i class="uil uil-clock"></i> ' + blog.readTime + '</span>' +
            '<span><i class="uil uil-user"></i> Mohan Yadav</span>' +
          '</div>' +
        '</div>' +
        '<div class="blog-detail-body">' + content + '</div>' +
        footerNav +
      '</article>' +
    '</div>';

  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeBlogDetail() {
  var modal = document.getElementById('blogDetailModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
