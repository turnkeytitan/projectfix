 <script>
                  jQuery(document).ready(function() {
                  jQuery(".itemJQuery").bind({
                       mouseenter: function() {
                             var self = jQuery(this), billboard = self.data("billboardElement");
                             if(!billboard) {
                                   billboard = jQuery(jQuery(".item-billboard", this)[0]);
                                   self.data("billboardElement", billboard);
                             }
                             jQuery(billboard).stop().animate({
                                   "margin-top": "-240px"
                             });
                       },

                         mouseleave: function() {
                             jQuery(this).data("billboardElement").stop().animate({
                                   "margin-top": 0
                             });
                       }
                  });
            });
            </script>