if (!user) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 font-sans dir-rtl relative overflow-hidden">
        {/* خلفية مضيئة متوهجة */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* الحاوية الرئيسية في المنتصف تماماً */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/80 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.7)]">
            
            {/* الشعار والعنوان */}
            <div className="text-center mb-8">
              <div className="relative inline-flex mb-3">
                <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                <div className="relative p-4 bg-gradient-to-tr from-indigo-600 to-violet-600 text-white rounded-2xl shadow-xl">
                  <Shield className="w-9 h-9" />
                </div>
              </div>
              <h1 className="text-2xl font-black text-white tracking-wide">خزنة الصور السرية</h1>
              <p className="text-slate-400 text-xs mt-1.5 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>حماية عسكرية ومشفرة لصورك الشخصية</span>
              </p>
            </div>

            {/* رسالة الخطأ إن وجدت */}
            {error && (
              <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            {/* النموذج */}
            <form onSubmit={handleAuth} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">الاسم الكامل</label>
                  <div className="relative">
                    <User className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-2xl px-4 py-3 pr-10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm"
                      placeholder="أدخل اسمك الكريم"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-2xl px-4 py-3 pr-10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">كلمة المرور</label>
                <div className="relative">
                  <Lock className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-2xl px-4 py-3 pr-10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">تأكيد كلمة المرور</label>
                  <div className="relative">
                    <KeyRound className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-2xl px-4 py-3 pr-10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 text-sm shadow-lg shadow-indigo-600/30"
              >
                {loading ? 'جاري المعالجة...' : (isLogin ? 'تسجيل الدخول إلى الخزنة' : 'إنشاء الحساب الفاخر')}
              </button>
            </form>

            {/* التبديل بين الدخول والإنشاء */}
            <div className="text-center mt-6 pt-6 border-t border-slate-800/60">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-indigo-400 hover:text-indigo-300 text-xs font-semibold transition-colors"
              >
                {isLogin ? 'ليس لديك حساب؟ انقر هنا لإنشاء حساب جديد' : 'لديك حساب بالفعل؟ سجل دخولك الآن'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }