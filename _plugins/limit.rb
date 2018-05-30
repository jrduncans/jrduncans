module Jekyll
  module LimitFilter
    def limit(input, limit)
      input.first(limit)
    end
  end
end

Liquid::Template.register_filter(Jekyll::LimitFilter)
