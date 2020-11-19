def webspicy_config(&bl)
  Webspicy::Configuration.new(Path.dir) do |c|

    def reset_database
      result = HTTP.post('http://dbagent/seeds/install', body: "id=test")
      throw "Unable to reset database: #{result.inspect}" if (result.status < 200 || result.status >= 400)
    end

    c.around_each do |tc, &bl|
      reset_database
      bl.call
    end


    c.host = "http://api:3000"
    c.client = Webspicy::HttpClient
    bl.call(c) if bl
  end
end
webspicy_config
