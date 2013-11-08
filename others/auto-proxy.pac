function FindPROXYForURL(url,host)
    {
      if (shExpMatch(host,"*.google.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.google.com.hk"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.facebook.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.twitter.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"twitter.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.googleusercontent.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.fbcdn.net"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.twimg.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.youtube.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.mitbbs.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.python.org"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.wordpress.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.appspot.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.blogspot.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.ytimg.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.box.net"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.blogger.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.googlelabs.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*opencompute.org"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.bloomberg.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"mashable.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.slideshare.net"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"sourceforge.net"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.dropbox.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*github.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.github.com"))
          return 'SOCKS5 127.0.0.1:7000';
      else if (shExpMatch(host,"*.vim.org"))
          return 'SOCKS5 127.0.0.1:7000';
      else
          return "DIRECT";
     }