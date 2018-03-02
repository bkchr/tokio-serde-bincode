(function() {var implementors = {};
implementors["tokio_serde_bincode"] = [{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_serde_bincode/struct.ReadBincode.html\" title=\"struct tokio_serde_bincode::ReadBincode\">ReadBincode</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a>,&nbsp;</span>",synthetic:false,types:["tokio_serde_bincode::ReadBincode"]},{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"tokio_serde_bincode/struct.WriteBincode.html\" title=\"struct tokio_serde_bincode::WriteBincode\">WriteBincode</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a>&lt;SinkItem = <a class=\"struct\" href=\"https://docs.rs/bytes/0.4.6/bytes/bytes/struct.BytesMut.html\" title=\"struct bytes::bytes::BytesMut\">BytesMut</a>, SinkError = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.27/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>",synthetic:false,types:["tokio_serde_bincode::WriteBincode"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
