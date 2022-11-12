

const navbar = () => {
    return `   <ul class="headshortcut">
    <li class="list-to">
        <span><i class="fa-solid fa-mobile-screen-button"></i> Save $3 with App <i
                class="fa-solid fa-angle-down fa-rect fs-14 mrg-right"></i></span>
        <div class="head-dropdown right">
            <div class="headappdownload">
                <div class="appDownload_title">Download App!</div>
                <p class="appDownload_desc" title="Save $3 with App &amp; New User Only">Save $3 with App &amp;
                    New User Only</p>
                <div class="appDownload_area">
                    <div><img src="https://css.gbtcdn.com/imagecache/gbw/img/app-download-qrcode.247877b.png"
                            alt=""></div>
                    <div class="app-slide">
                        <a href="https://gearbest.app.link/pctopios" class="appDownload"><img
                                src="https://css.gbtcdn.com/imagecache/gbw/img/apple-store.f9fad9d.png"
                                style="background-repeat: no-repeat;"></a>
                        <a href="https://gearbest.app.link/pctopandroid" class="appDownload_googlePlay">
                            <img src="https://css.gbtcdn.com/imagecache/gbw/img/google-play.c7f6860.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li class="support-center">
        <a href="#">support center</a>
    </li>
    <li id="lag-dropdown">
        <label for="btn">
            <span>Ship to</span>
            <img src="https://uidesign.gbtcdn.com/GB/app/2018/flag_png/gb.png">
            <span>ZAR</span>
            <span><i class="fa-solid fa-angle-down mrg-right fx-5"></i></span>
        </label>
        <input type="checkbox" id="btn" class="check-non">

        <div class="ship-dropdown">
            <p><strong>Select Regional Settings</strong></p>
            <span class="bold">Ship to</span>

            <div class="wrapper">
                <div class="select_btn">
                    <span class="sCountry">select country</span>
                    <span><i class="fa-solid fa-angle-down"></i></span>
                </div>
                <div class="content">
                    <div class="serch">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search">
                    </div>


                    <ul class="option"></ul>
                </div>
            </div>

            <span class="tb bold">Currency</span>

            <div class="wrapper1">
                <div class="select_btn1">
                    <span class="changename_1">select Currency</span>
                    <span><i class="fa-solid fa-angle-down "></i></span>
                </div>
                <div class="content1">
                    <ul class="option1">
                    </ul>
                </div>

            </div>
        </div>
        </div>
    </li>
    <li>
        <label for="language-table">
            <span>Langugae</span>
            <span><i class=" fa-solid fa-angle-down mrg-right"></i></span>
        </label>

        <input type="checkbox" id="language-table">

        <table cellspacing="0" cellpadding="0" border="0" class="table-l">
            <tbody>
                <tr>
                    <td>
                        <a href="#">
                            <div style="white-space: nowrap;"><span class="text">Select Language</span></div>
                            <div style="white-space: nowrap;"><span class="text">Afrikaans</span></div>
                            <div style="white-space: nowrap;"><span class="text">Albanian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Amharic</span></div>
                            <div style="white-space: nowrap;"><span class="text">Arabic</span></div>
                            <div style="white-space: nowrap;"><span class="text">Armenian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Assamese</span></div>
                            <div style="white-space: nowrap;"><span class="text">Aymara</span></div>
                            <div style="white-space: nowrap;"><span class="text">Azerbaijani</span></div>
                            <div style="white-space: nowrap;"><span class="text">Bambara</span></div>
                            <div style="white-space: nowrap;"><span class="text">Basque</span></div>
                        </a>
                    </td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Belarusian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Bengali</span></div>
                            <div style="white-space: nowrap;"><span class="text">Bhojpuri</span></div>
                            <div style="white-space: nowrap;"><span class="text">Bosnian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Bulgarian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Burmese</span></div>
                            <div style="white-space: nowrap;"><span class="text">Catalan</span></div>
                            <div style="white-space: nowrap;"><span class="text">Cebuano</span></div>
                            <div style="white-space: nowrap;"><span class="text">Chichewa</span></div>
                            <div style="white-space: nowrap;"><span class="text">Chinese (Simplified)</span>
                            </div>
                            <div style="white-space: nowrap;"><span class="text">Chinese (Traditional)</span>
                            </div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Corsican</span></div>
                            <div style="white-space: nowrap;"><span class="text">Croatian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Czech</span></div>
                            <div style="white-space: nowrap;"><span class="text">Danish</span></div>
                            <div style="white-space: nowrap;"><span class="text">Dhivehi</span></div>
                            <div style="white-space: nowrap;"><span class="text">Dogri</span></div>
                            <div style="white-space: nowrap;"><span class="text">Dutch</span></div>
                            <div style="white-space: nowrap;"><span class="text">Esperanto</span></div>
                            <div style="white-space: nowrap;"><span class="text">Estonian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Ewe</span></div>
                            <div style="white-space: nowrap;"><span class="text">Filipino</span></div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Finnish</span></div>
                            <div style="white-space: nowrap;"><span class="text">French</span></div>
                            <div style="white-space: nowrap;"><span class="text">Frisian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Galician</span></div>
                            <div style="white-space: nowrap;"><span class="text">Georgian</span></div>
                            <div style="white-space: nowrap;"><span class="text">German</span></div>
                            <div style="white-space: nowrap;"><span class="text">Greek</span></div>
                            <div style="white-space: nowrap;"><span class="text">Guarani</span></div>
                            <div style="white-space: nowrap;"><span class="text">Gujarati</span></div>
                            <div style="white-space: nowrap;"><span class="text">Haitian Creole</span></div>
                            <div style="white-space: nowrap;"><span class="text">Hausa</span></div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Hawaiian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Hebrew</span></div>
                            <div style="white-space: nowrap;"><span class="text">Hindi</span></div>
                            <div style="white-space: nowrap;"><span class="text">Hmong</span></div>
                            <div style="white-space: nowrap;"><span class="text">Hungarian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Icelandic</span></div>
                            <div style="white-space: nowrap;"><span class="text">Igbo</span></div>
                            <div style="white-space: nowrap;"><span class="text">Ilocano</span></div>
                            <div style="white-space: nowrap;"><span class="text">Indonesian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Irish Gaelic</span></div>
                            <div style="white-space: nowrap;"><span class="text">Italian</span></div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Japanese</span></div>
                            <div style="white-space: nowrap;"><span class="text">Javanese</span></div>
                            <div style="white-space: nowrap;"><span class="text">Kannada</span></div>
                            <div style="white-space: nowrap;"><span class="text">Kazakh</span></div>
                            <div style="white-space: nowrap;"><span class="text">Khmer</span></div>
                            <div style="white-space: nowrap;"><span class="text">Kinyarwanda</span></div>
                            <div style="white-space: nowrap;"><span class="text">Konkani</span></div>
                            <div style="white-space: nowrap;"><span class="text">Korean</span></div>
                            <div style="white-space: nowrap;"><span class="text">Krio</span></div>
                            <div style="white-space: nowrap;"><span class="text">Kurdish (Kurmanji)</span></div>
                            <div style="white-space: nowrap;"><span class="text">Kurdish (Sorani)</span></div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Kyrgyz</span></div>
                            <div style="white-space: nowrap;"><span class="text">Lao</span></div>
                            <div style="white-space: nowrap;"><span class="text">Latin</span></div>
                            <div style="white-space: nowrap;"><span class="text">Latvian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Lingala</span></div>
                            <div style="white-space: nowrap;"><span class="text">Lithuanian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Luganda</span></div>
                            <div style="white-space: nowrap;"><span class="text">Luxembourgish</span></div>
                            <div style="white-space: nowrap;"><span class="text">Macedonian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Maithili</span></div>
                            <div style="white-space: nowrap;"><span class="text">Malagasy</span></div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Malay</span></div>
                            <div style="white-space: nowrap;"><span class="text">Malayalam</span></div>
                            <div style="white-space: nowrap;"><span class="text">Maltese</span></div>
                            <div style="white-space: nowrap;"><span class="text">Maori</span></div>
                            <div style="white-space: nowrap;"><span class="text">Marathi</span></div>
                            <div style="white-space: nowrap;"><span class="text">Meiteilon (Manipuri)</span>
                            </div>
                            <div style="white-space: nowrap;"><span class="text">Mizo</span></div>
                            <div style="white-space: nowrap;"><span class="text">Mongolian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Nepali</span></div>
                            <div style="white-space: nowrap;"><span class="text">Norwegian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Odia (Oriya)</span></div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Oromo</span></div>
                            <div style="white-space: nowrap;"><span class="text">Pashto</span></div>
                            <div style="white-space: nowrap;"><span class="text">Persian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Polish</span></div>
                            <div style="white-space: nowrap;"><span class="text">Portuguese</span></div>
                            <div style="white-space: nowrap;"><span class="text">Punjabi</span></div>
                            <div style="white-space: nowrap;"><span class="text">Quechua</span></div>
                            <div style="white-space: nowrap;"><span class="text">Romanian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Russian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Samoan</span></div>
                            <div style="white-space: nowrap;"><span class="text">Sanskrit</span></div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Scots Gaelic</span></div>
                            <div style="white-space: nowrap;"><span class="text">Sepedi</span></div>
                            <div style="white-space: nowrap;"><span class="text">Serbian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Sesotho</span></div>
                            <div style="white-space: nowrap;"><span class="text">Shona</span></div>
                            <div style="white-space: nowrap;"><span class="text">Sindhi</span></div>
                            <div style="white-space: nowrap;"><span class="text">Sinhala</span></div>
                            <div style="white-space: nowrap;"><span class="text">Slovak</span></div>
                            <div style="white-space: nowrap;"><span class="text">Slovenian</span></div>
                            <div style="white-space: nowrap;"><span class="text">Somali</span></div>
                            <div style="white-space: nowrap;"><span class="text">Spanish</span></div>
                        </a></td>
                    <td class="goog-te-menu2-colpad">&nbsp;</td>
                    <td><a class="goog-te-menu2-item" href="#">
                            <div style="white-space: nowrap;"><span class="text">Sundanese</span></div>
                            <div style="white-space: nowrap;"><span class="text">Swahili</span></div>
                            <div style="white-space: nowrap;"><span class="text">Swedish</span></div>
                            <div style="white-space: nowrap;"><span class="text">Tajik</span></div>
                            <div style="white-space: nowrap;"><span class="text">Tamil</span></div>
                            <div style="white-space: nowrap;"><span class="text">Tatar</span></div>
                            <div style="white-space: nowrap;"><span class="text">Telugu</span></div>
                            <div style="white-space: nowrap;"><span class="text">Thai</span></div>
                            <div style="white-space: nowrap;"><span class="text">Tigrinya</span></div>
                            <div style="white-space: nowrap;"><span class="text">Tsonga</span></div>
                            <div style="white-space: nowrap;"><span class="text">Turkish</span></div>
                        </a></td>

                </tr>
            </tbody>
        </table>
    </li>
    <li class="countryHover">
        <span>Country Website</span>
        <span><i class=" fa-solid fa-angle-down mrg-right fa-rect"></i></span>



        <div class="country_wbsite">
            <div class="countr-under">
                <ul class="country">
                    <li>Global(english)</li>
                    <li>France</li>
                    <li>España</li>
                    <li>Россия</li>
                    <li>Portugal</li>
                    <li>Italia</li>
                    <li>Deutschland</li>
                    <li>Brasil</li>
                    <li>Türkiye</li>
                    <li>Polska</li>
                    <li>Japan</li>
                </ul>
            </div>
        </div>
    </li>
</ul>
<div class="logo">
    <img src="https://i.ibb.co/v4F4xsm/Apni-Dukaan.png" alt="" srcset="" width="100%">
</div>

<div class="container">
    <div class="serch-input">
        <div>
            <span> ALL</span>
            <i class="fa-solid fa-angle-down fs-14 mrg-right"></i>

        </div>
        <input type=" text" id="" placeholder="Sarch">
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>


    <div class="line-stright sign_in">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAtFBMVEUAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAADg4OAAAAACAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAADf398AAAAAAAAAAADR0dEAAABISEipqakmJiYAAAAoKCgAAAAAAAAAAAA1NTXMzMwAAAAAAADf399WVlYAAAAAAACsrKzf398AAAAAAAAAAAAAAADg4ODR0dHe3t4ReYomAAAAOHRSTlMAQPzFDvXsrm47E/C+tKl/9+dnGQXx8NuvioN5VVBKRTQQBvrz7d3Z18u4t7SjlYBfX11NMDAfCv0TF7MAAADjSURBVCjPpZDXcsJADEXX29wbEHoCIT30fg3//1941svA2h5eOE+aOdJIuuRJ9iyB/O/zqhlQKFKrbByAuZy7DNQ1DReIiipCyktD7W3Xz7o74r3AMZSN0M9y/HcSwjYUwzRTvJIemKFC/BRqWZmKIU7FVL6rYahDgo+z2hWhXfq6AXx9nmYrBqwrP+s0qEPKeHFKc/H7VhGLBJq/oWEsCaDTi+O+LYCgeTNjATrXqR4HFB3valrfkONboysR3B0+IneMgOsxgeoywo50JbAx1RBSr0INLaWadaq4f2LVMCGPuACORSZPQ0RWdgAAAABJRU5ErkJggg=="
            alt="">
        <span class="gray">sign in</span>

        <div class="signin_dropdown">
            <div class="signin_container">
                <p>Welcome to Gearbest</p>
                <div class="signbtn-cover">
                    <a href="./signin.html" class="signbtn">sign in</a>
                </div>

                <div class="sign_in_google">
                    <span class="gray">Or Connect Via</span>
                    <span><img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" srcset=""
                            width="20px"></span>
                </div>

                <div class="hr"></div>

                <div class="register">
                    <p>Register on Gearbest: Earn 10 points</p>

                    <div class="registerbtn">
                        <a href="./signup.html">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="line-stright Favorites">

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAA81BMVEUAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGxsYTExMAAAAAAADg4OAAAADf39/g4OAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh4eEAAADi4uIAAADt7e3d3d1iYmLf39+RkZEAAADg4OAAAAArKyvf398QEBCoqKglJSXg4OAXFxfg4OAKCgohISHf39/f398dHR3f398AAADHx8cAAAAAAABSUlIvLy8AAAAAAAD////g4OAAAACSkpLV1dW0tLSHh4dycnJUVFRDQ0NMKKmhAAAASHRSTlMA+vTB+ZAoIAwF/NummWpAM/z89vHw5OHc0Me7mIuHc3BmU0tHPjwiFA37+/r47Ovr5drTz8C0s62to6GIgoB3ZF1WThsZEwOBbnz7AAAA+klEQVQoz73Q1W7DQBRF0WPm2GFsOCkzM7c+5f//msa3ELvtW6Wsh5krbc2MNJg5y9BUakNgqFHVDGta+kUK36coDr7KwGXTRNQmWeo6d1cN6iHEgsquDJdUIhkMbtgytOnjQ6f3OdTZkd3j+L5VjbdGGB2Uq8eLAHpsJMUh7b04cSJrbdJMluQp8iJOawEWVTmlcCeT1oGQdSQ0LscZ8wg4JylHN59NJpVbSY7Ht3Qpo5kcEqbCl1Q6C1ixJciVfPguNYNrqf89nLaVI6oRUvbJZylLu1RCZJy6fH2M4/w29T5+uC6w8LSqszLGLzebnAhs/OXc03P4r3d0M0A98TPbIwAAAABJRU5ErkJggg=="
            alt="" srcset="">
        <span class="gray">Favorites</span>

    </div>

    <div class="cart line-stright ">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAn1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqJAAUEQD/2QAAAABJPgAAAAAAAAAAAAD/2gD/2gAAAAAAAAD/2gAAAAAAAAAAAAD/2QAAAAAAAAD/2wAAAAAAAAD/2QAAAAD/4wAAAAD/2gD51ADQsQCiigB0YwBGOwCQauaIAAAALnRSTlMA09hV4UL48rFIE/zazLuVfXZJIR39++3r5+fk29TJqKakm46JgG9lW1pNNjISfz/FPQAAALRJREFUKM+dz1cKwzAQRdHn7vRip/feX+r+1xaDLDx2Igi5XyMODCP8mcWkvpkYwVDIg4mabBhkxs9qinx+qZxe0ka+Mn01zNkq0JmWvmJwFU0Ah6GiIzuSekCLa0UReRM0BRrcQRXwLmgB1OmlVOND0AaoMk5pyaegPVCpIG3Ll6ATYtqaPHYFXZJ3mH2+2Aq6ekF8D79UGrklPTu27Qgakq6ex6QlyBVk56kdBNnCqlpo7g1Gxypv685O3AAAAABJRU5ErkJggg=="
            alt="">

        <span><a class="gray" href="./cart.html">cart</a></span>

        <span class="badges">
            0
        </span>



        <div class="showcart">
            <div class="showchild"></div>

            <div class="headdetail">
                <div class="showcartdetails">
                    <p class="numberoi">0</p>
                    <p class="cartshowprice"></p>
                </div>
                <a href="../cart.html">
                    <div class="cartshowbtn">
                        View My Cart
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>





<div class="top_nav">
    <ul class="headnav">
        <li class="nav-catle">
            <div>
                <i class="icon-catelog"></i>
                <a href="#" class="nav-cat">Category</a>
            </div>

            <ul class="headrop">
                <li>
                    <a href="#" class="headCate_itemName">
                        <span>Consumer Electronics</span> </a>


                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Smart Electronics</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Smart Watches</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Watch Phone</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Wristband</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Watch Accessories</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Sport Watch</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Health Watch</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Security &amp; Protection</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Access Control</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Alarm Systems</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Door Intercom</a> </dd>
                                <dd> <a href="#" class="headCate_childName">IP Cameras</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Doorbells</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Surveillance Camera System</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Headphones &amp; Earphones</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Bluetooth Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Earbud Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gaming Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">On-Ear &amp; Over-Ear Headphones</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Sports &amp; Fitness Headphones</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Headphone Accessories</a> </dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Xiaomi Ecosystem Products</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Xiaomi</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Amazfit</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Aqara</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Haylou</a> </dd>
                                <dd> <a href="#" class="headCate_childName">QCY</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Kospet</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Lenovo</a> </dd>
                                <dd> <a href="#" class="headCate_childName">CORN</a> </dd>
                                <dd> <a href="#" class="headCate_childName">KZ</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ticwatch</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gocomma</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Other Consumer Electronics</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Smart Home</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Action Cameras
                                        &amp; DV Accessories</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gimbal</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Video Game</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Speakers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Microphone</a> </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/9534/KOSPET+M1+230X420+EN.jpg"
                                data-custom-lazy="https://uidesign.gbtcdn.com/GB/image/9534/KOSPET+M1+230X420+EN.jpg"
                                class="js-cateChildImg"> </a>
                    </div>

                </li>
                <li>
                    <a href="#" class="headCate_itemName">
                        <span>Industrial &amp; Scientific</span> </a>


                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">3D Printer & Supplies</a> </dt>
                                <dd> <a href="#" class="headCate_childName">3D Printers, 3D Printer Kits</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Filament</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Scanners</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Parts</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printing Pen</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Module Board</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Power Tools</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Measurement & Analysis</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Arduino & SCM Supplies</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electric Screwdriver</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Glue Gun</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Laser Engraver & CNC</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Laser Engraving Machine</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laser Module</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gaming Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laser Accessories</a>
                                </dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Professional Tools</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Laser Rangefinder</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electrical Equipments & Supplies</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> headCate_childName</a></dd>
                                <dd> <a href="#" class="headCate_childName">Magnifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Telescope</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Cutting Tools</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Testers & Detectors</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Microscopes & Endoscope</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electronic Distance Meter</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Multimeters & Fitting</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Soldering Supplies</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ultrasonic Cleaner</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Measuring ruler</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Creality</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Alfawise
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Artillery</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ortur</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Anycubic</a> </dd>
                                <dd> <a href="#" class="headCate_childName">QIDI</a> </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg"
                                class="js-cateChildImg"> </a>
                    </div>
                </li>
                <li>
                    <a href="#" class="headCate_itemName">
                        <span>Cell Phones &amp; Accessories</span> </a>

                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">TOP Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Xiaomi</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Oneplus</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Huawei</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Asus</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Oppo</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">HOT Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Lenovo</a> </dd>
                                <dd> <a href="#" class="headCate_childName">DOOGEE</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cubot</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ulefone</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Oukitel</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Elephone</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Cell Phone Accessories</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Cases & Covers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Screen Protectors</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Chargers & Power Adapters</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cables</a></dd>
                                <dd> <a href="#" class="headCate_childName">Stands & Holders</a></dd>
                                <dd> <a href="#" class="headCate_childName">Airpods Accessories</a></dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Smartphones</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Waterproof phones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Dual sim phones</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> 5G phones</a></dd>
                                <dd> <a href="#" class="headCate_childName">Featured phones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Refurbished phones</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Main Features</a> </dt>
                                <dd> <a href="#" class="headCate_childName">6GB RAM Mobile</a> </dd>
                                <dd> <a href="#" class="headCate_childName">8GB RAM Mobile</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">NFC Phones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Full screen Phones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Snapdragon 855</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Hot Cases & Covers</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Cases For Xiaomi</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For OnePlus
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For Apple</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For Samsung</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For Huawei</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For ASUS</a> </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/9534/KOSPET+M1+230X420+EN.jpg"
                                class="js-cateChildImg"> </a>
                    </div>



                </li>
                <li class="headNav_cate">
                    <a href="#" class="headCate_itemName">
                        <span>Appliances</span> </a>

                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">TOP Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Xiaomi</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Oneplus</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Huawei</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Asus</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Oppo</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">HOT Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Lenovo</a> </dd>
                                <dd> <a href="#" class="headCate_childName">DOOGEE</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cubot</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ulefone</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Oukitel</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Elephone</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Cell Phone Accessories</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Cases & Covers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Screen Protectors</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Chargers & Power Adapters</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cables</a></dd>
                                <dd> <a href="#" class="headCate_childName">Stands & Holders</a></dd>
                                <dd> <a href="#" class="headCate_childName">Airpods Accessories</a></dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Smartphones</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Waterproof phones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Dual sim phones</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> 5G phones</a></dd>
                                <dd> <a href="#" class="headCate_childName">Featured phones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Refurbished phones</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Main Features</a> </dt>
                                <dd> <a href="#" class="headCate_childName">6GB RAM Mobile</a> </dd>
                                <dd> <a href="#" class="headCate_childName">8GB RAM Mobile</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">NFC Phones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Full screen Phones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Snapdragon 855</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Hot Cases & Covers</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Cases For Xiaomi</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For OnePlus
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For Apple</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For Samsung</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For Huawei</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cases For ASUS</a> </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/9534/KOSPET+M1+230X420+EN.jpg"
                                class="js-cateChildImg"> </a>
                    </div>


                </li>
                <li>
                    <a href="#" class="headCate_itemName">
                        <span>Outdoors, Fitness &amp; Sports</span> </a>



                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Vacuums & Floor Care</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Vacuum Cleaners</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Upright Vacuums</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Steam Cleaners</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Robotic Window Cleaner</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Robotic Vacuum Accessories</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Air Conditioning Appliances</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Air Purifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Humidifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Dehumidifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Air Cooler Fan </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electric Heaters</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Kitchen Appliances</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Electric Kettles</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cooker & Steamer</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Blender & Mixer</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Vacuum Food Sealers</a></dd>
                                <dd> <a href="#" class="headCate_childName">Cooking Appliances</a></dd>
                                <dd> <a href="#" class="headCate_childName">Coffee Makers</a></dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Alfawise</a> </dd>
                                <dd> <a href="#" class="headCate_childName">360</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> Roborock</a></dd>
                                <dd> <a href="#" class="headCate_childName">VIOMI </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Mijia</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Smart Home System</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Power Strips</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Plug</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Doorbells</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Remote Control</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Household Appliances</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Mosquito Killer Lamps</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Soap Dispensers
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laundry Appliances</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Home Appliances Accessories</a>
                                </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/4048/en_230x420-2.jpg"> </a>
                    </div>
                </li>
                <li class="headNav_cate">
                    <a href="#" class="headCate_itemName">
                        <span>Computers, Tablets &amp; Office</span> </a>

                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">3D Printer & Supplies</a> </dt>
                                <dd> <a href="#" class="headCate_childName">3D Printers, 3D Printer Kits</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Filament</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Scanners</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Parts</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printing Pen</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Module Board</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Power Tools</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Measurement & Analysis</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Arduino & SCM Supplies</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electric Screwdriver</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Glue Gun</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Laser Engraver & CNC</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Laser Engraving Machine</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laser Module</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gaming Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laser Accessories</a>
                                </dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Professional Tools</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Laser Rangefinder</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electrical Equipments & Supplies</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> headCate_childName</a></dd>
                                <dd> <a href="#" class="headCate_childName">Magnifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Telescope</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Cutting Tools</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Testers & Detectors</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Microscopes & Endoscope</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electronic Distance Meter</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Multimeters & Fitting</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Soldering Supplies</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ultrasonic Cleaner</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Measuring ruler</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Creality</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Alfawise
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Artillery</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ortur</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Anycubic</a> </dd>
                                <dd> <a href="#" class="headCate_childName">QIDI</a> </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg"
                                class="js-cateChildImg"> </a>
                    </div>

                </li>
                <li class="headNav_cate">
                    <a href="#" class="headCate_itemName">
                        <span>Health &amp; Personal Care</span> </a>

                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Smart Electronics</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Smart Watches</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Watch Phone</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Wristband</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Watch Accessories</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Sport Watch</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Health Watch</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Security &amp; Protection</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Access Control</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Alarm Systems</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Door Intercom</a> </dd>
                                <dd> <a href="#" class="headCate_childName">IP Cameras</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Doorbells</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Surveillance Camera System</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Headphones &amp; Earphones</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Bluetooth Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Earbud Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gaming Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">On-Ear &amp; Over-Ear Headphones</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Sports &amp; Fitness Headphones</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Headphone Accessories</a> </dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Xiaomi Ecosystem Products</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Xiaomi</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Amazfit</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Aqara</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Haylou</a> </dd>
                                <dd> <a href="#" class="headCate_childName">QCY</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Kospet</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Lenovo</a> </dd>
                                <dd> <a href="#" class="headCate_childName">CORN</a> </dd>
                                <dd> <a href="#" class="headCate_childName">KZ</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ticwatch</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gocomma</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Other Consumer Electronics</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Smart Home</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Action Cameras
                                        &amp; DV Accessories</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gimbal</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Video Game</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Speakers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Microphone</a> </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/9534/KOSPET+M1+230X420+EN.jpg"
                                data-custom-lazy="https://uidesign.gbtcdn.com/GB/image/9534/KOSPET+M1+230X420+EN.jpg"
                                class="js-cateChildImg"> </a>
                    </div>

                </li>
                <li class="headNav_cate">
                    <a href="#" class="headCate_itemName"> <span>Home Improvement &amp; Tools</span> </a>

                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Vacuums & Floor Care</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Vacuum Cleaners</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Upright Vacuums</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Steam Cleaners</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Robotic Window Cleaner</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Robotic Vacuum Accessories</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Air Conditioning Appliances</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Air Purifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Humidifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Dehumidifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Air Cooler Fan </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electric Heaters</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Kitchen Appliances</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Electric Kettles</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cooker & Steamer</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Blender & Mixer</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Vacuum Food Sealers</a></dd>
                                <dd> <a href="#" class="headCate_childName">Cooking Appliances</a></dd>
                                <dd> <a href="#" class="headCate_childName">Coffee Makers</a></dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Alfawise</a> </dd>
                                <dd> <a href="#" class="headCate_childName">360</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> Roborock</a></dd>
                                <dd> <a href="#" class="headCate_childName">VIOMI </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Mijia</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Smart Home System</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Power Strips</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Plug</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Doorbells</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Remote Control</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Household Appliances</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Mosquito Killer Lamps</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Soap Dispensers
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laundry Appliances</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Home Appliances Accessories</a>
                                </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/4048/en_230x420-2.jpg"> </a>
                    </div>

                </li>
                <li class="headNav_cate">
                    <a href="#" class="headCate_itemName">
                        <span>Drones, Toys &amp; Hobbies</span> </a>
                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">3D Printer & Supplies</a> </dt>
                                <dd> <a href="#" class="headCate_childName">3D Printers, 3D Printer Kits</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Filament</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Scanners</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Parts</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printing Pen</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Module Board</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Power Tools</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Measurement & Analysis</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Arduino & SCM Supplies</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electric Screwdriver</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Glue Gun</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Laser Engraver & CNC</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Laser Engraving Machine</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laser Module</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gaming Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laser Accessories</a>
                                </dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Professional Tools</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Laser Rangefinder</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electrical Equipments & Supplies</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> headCate_childName</a></dd>
                                <dd> <a href="#" class="headCate_childName">Magnifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Telescope</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Cutting Tools</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Testers & Detectors</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Microscopes & Endoscope</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electronic Distance Meter</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Multimeters & Fitting</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Soldering Supplies</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ultrasonic Cleaner</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Measuring ruler</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Creality</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Alfawise
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Artillery</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ortur</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Anycubic</a> </dd>
                                <dd> <a href="#" class="headCate_childName">QIDI</a> </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg"
                                class="js-cateChildImg"> </a>
                    </div>
                </li>
                <li class="headNav_cate">
                    <a href="#" class="headCate_itemName">
                        <span>Home &amp; Garden</span> </a>


                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Vacuums & Floor Care</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Vacuum Cleaners</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Upright Vacuums</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Steam Cleaners</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Robotic Window Cleaner</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Robotic Vacuum Accessories</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Air Conditioning Appliances</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Air Purifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Humidifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Dehumidifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Air Cooler Fan </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electric Heaters</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Kitchen Appliances</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Electric Kettles</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cooker & Steamer</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Blender & Mixer</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Vacuum Food Sealers</a></dd>
                                <dd> <a href="#" class="headCate_childName">Cooking Appliances</a></dd>
                                <dd> <a href="#" class="headCate_childName">Coffee Makers</a></dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Alfawise</a> </dd>
                                <dd> <a href="#" class="headCate_childName">360</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> Roborock</a></dd>
                                <dd> <a href="#" class="headCate_childName">VIOMI </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Mijia</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Smart Home System</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Power Strips</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Plug</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Doorbells</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Remote Control</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Household Appliances</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Mosquito Killer Lamps</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Soap Dispensers
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laundry Appliances</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Home Appliances Accessories</a>
                                </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/4048/en_230x420-2.jpg"> </a>
                    </div>
                </li>
                <li class="headNav_cate">
                    <a href="#" class="headCate_itemName">
                        <span>Motor &amp; Car Electronics</span> </a>
                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">3D Printer & Supplies</a> </dt>
                                <dd> <a href="#" class="headCate_childName">3D Printers, 3D Printer Kits</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Filament</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Scanners</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Parts</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printing Pen</a> </dd>
                                <dd> <a href="#" class="headCate_childName">3D Printer Module Board</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="https://www.gearbest.com/security-protection-c_11982/"
                                        class="headCate_childTitle">Power Tools</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Measurement & Analysis</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Arduino & SCM Supplies</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electric Screwdriver</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Glue Gun</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Laser Engraver & CNC</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Laser Engraving Machine</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laser Module</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Gaming Headphones</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laser Accessories</a>
                                </dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Professional Tools</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Laser Rangefinder</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electrical Equipments & Supplies</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> headCate_childName</a></dd>
                                <dd> <a href="#" class="headCate_childName">Magnifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Telescope</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Cutting Tools</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Testers & Detectors</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Microscopes & Endoscope</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electronic Distance Meter</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Multimeters & Fitting</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Soldering Supplies</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ultrasonic Cleaner</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Measuring ruler</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Creality</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Alfawise
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Artillery</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Ortur</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Anycubic</a> </dd>
                                <dd> <a href="#" class="headCate_childName">QIDI</a> </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg"
                                class="js-cateChildImg"> </a>
                    </div>
                </li>
                <li class="headNav_cate">
                    <a href="#" class="headCate_itemName"> <span>Gearbest Promotion</span> </a>

                    <div class="hadecatchild">
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Vacuums & Floor Care</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Vacuum Cleaners</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Upright Vacuums</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Steam Cleaners</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Robotic Window Cleaner</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Robotic Vacuum Accessories</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Air Conditioning Appliances</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Air Purifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Humidifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Dehumidifiers</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Air Cooler Fan </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Electric Heaters</a> </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Kitchen Appliances</a>
                                </dt>
                                <dd> <a href="#" class="headCate_childName">Electric Kettles</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Cooker & Steamer</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Blender & Mixer</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Vacuum Food Sealers</a></dd>
                                <dd> <a href="#" class="headCate_childName">Cooking Appliances</a></dd>
                                <dd> <a href="#" class="headCate_childName">Coffee Makers</a></dd>
                            </dl>

                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Hot Brands</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Alfawise</a> </dd>
                                <dd> <a href="#" class="headCate_childName">360</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName"> Roborock</a></dd>
                                <dd> <a href="#" class="headCate_childName">VIOMI </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Mijia</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="headCate_childColumn">
                            <dl class="headCate_childBlock">
                                <dt> <a href="#" class="headCate_childTitle">Smart Home System</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Power Strips</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Plug</a>
                                </dd>
                                <dd> <a href="#" class="headCate_childName">Doorbells</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Smart Remote Control</a> </dd>
                            </dl>
                            <dl class="headCate_childBlock">
                                <dt> <a class="headCate_childTitle">Household Appliances</a> </dt>
                                <dd> <a href="#" class="headCate_childName">Mosquito Killer Lamps</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Soap Dispensers
                                    </a> </dd>
                                <dd> <a href="#" class="headCate_childName">Laundry Appliances</a> </dd>
                                <dd> <a href="#" class="headCate_childName">Home Appliances Accessories</a>
                                </dd>
                            </dl>
                        </div>
                        <a class="headCate_childImg"
                            href="https://www.gearbest.com/store/6901962188706213888.html">
                            <img src="https://uidesign.gbtcdn.com/GB/image/4048/en_230x420-2.jpg"> </a>
                    </div>

                </li>
            </ul>

        </li>
        <li>
            <a href="./superdeal.html" class="nav-link">SUPER DEALS</a>
        </li>
        <li>
            <a href="./Apponly.html" class="nav-link"> APP ONLY</a>
        </li>
        <li>
            <a href="./new_arrival.html" class="nav-link">NEW ARRIVALS</a>
        </li>
    </ul>
</div>`
}


export { navbar }