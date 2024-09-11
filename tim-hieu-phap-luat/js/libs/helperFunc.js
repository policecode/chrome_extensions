const questions = [
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, đâu là mục đích xây dựng và thực hiện hương ước, quy ước?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, cá nhân nào dưới đây là thành viên Ban Giám sát đầu tư của cộng đồng?",
        result: "Đại diện người dân trên địa bàn thôn, tổ dân phố nơi có chương trình, dự án."
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, công dân là cán bộ, công chức, viên chức, người lao động thực hiện dân chủ tại đâu?",
        result: "Công dân là cán bộ, công chức, viên chức, người lao động thực hiện dân chủ tại cơ quan, đơn vị nơi mình công tác. Trường hợp cơ quan, đơn vị có đơn vị trực thuộc thì việc thực hiện dân chủ tại đơn vị trực thuộc của cơ quan, đơn vị do người đứng đầu cơ quan, đơn vị quyết định."
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, đâu là trách nhiệm của Ủy ban nhân dân cấp xã trong việc bảo đảm hoạt động của Ban Thanh tra nhân dân ở xã, phường, thị trấn?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, hoạt động của Ban Thanh tra nhân dân ở cơ quan, đơn vị được quy định như thế nào?",
        result: "Tất cả các đáp án"
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, nhiệm kỳ của Ban Thanh tra nhân dân ở cơ quan, đơn vị được quy định như thế nào?",
        result: "Nhiệm kỳ của Ban Thanh tra nhân dân là 02 năm. Trong nhiệm kỳ, nếu khuyết thành viên hoặc thành viên Ban Thanh tra nhân dân không hoàn thành nhiệm vụ, không còn được tín nhiệm hoặc xin thôi làm nhiệm vụ thì Ban Chấp hành Công đoàn cơ quan, đơn vị đề nghị hội nghị cán bộ, công chức, viên chức, người lao động quyết định cho thôi làm nhiệm vụ và bầu người khác thay thế"
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, trừ các thông tin thuộc bí mật nhà nước, bí mật công tác hoặc thông tin chưa được công khai theo quy định của pháp luật, người đứng đầu cơ quan, đơn vị phải công khai trong nội bộ cơ quan, đơn vị nội dung nào sau đây? ",
        result: "Chủ trương, chính sách của Đảng và pháp luật của Nhà nước liên quan đến tổ chức và hoạt động của cơ quan, đơn vị."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, thẩm quyền triệu tập và chủ trì cuộc họp của cộng đồng dân cư để cho thôi làm Trưởng thôn, Tổ trưởng tổ dân phố là?",
        result: "Trưởng Ban công tác Mặt trận ở thôn, tổ dân phố, không đồng thời là Trưởng thôn, Tổ trưởng tổ dân phố."
    },
    {
        question: "Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ về xây dựng và thực hiện hương ước, quy ước của cộng đồng dân cư có hiệu lực từ ngày, tháng, năm nào?",
        result: "Nghị định có hiệu lực thi hành từ ngày 16 tháng 8 năm 2023"
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, thời hạn niêm yết công khai dự thảo hương ước, quy ước là?",
        result: "Không ít hơn 30 ngày."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, công tác phối hợp trong thực hiện hoạt động của Ban Thanh tra nhân dân ở doanh nghiệp nhà nước được quy định như thế nào?",
        result: "Giữ mối liên hệ và phối hợp chặt chẽ với ban lãnh đạo, điều hành doanh nghiệp và người lao động để kịp thời tiếp nhận ý kiến, phản ánh; tổng hợp, đối chiếu, xác minh và kiến nghị giải quyết theo thẩm quyền hoặc báo cáo đến cơ quan, cá nhân có thẩm quyền giải quyết theo quy định của pháp luật."
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, thành viên của Ban Giám sát đầu tư của cộng đồng cần có những tiêu chuẩn nào sau đây?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, việc phối hợp thực hiện nhiệm vụ của Ban Thanh tra nhân dân ở cơ quan, đơn vị được quy định như thế nào?",
        result: "Giữ mối liên hệ và phối hợp chặt chẽ với người đứng đầu và cán bộ, công chức, viên chức, người lao động ở cơ quan, đơn vị để kịp thời tiếp nhận ý kiến, phản ánh; tổng hợp, đối chiếu, xác minh và kiến nghị giải quyết theo thẩm quyền hoặc báo cáo đến cơ quan có thẩm quyền giải quyết theo quy định của pháp luật."
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, công dân thực hiện việc kiểm tra, giám sát thông qua cơ quan, tổ chức nào dưới đây?",
        result: "Mặt trận Tổ quốc Việt Nam cấp xã."
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, cơ quan nào quy định chi tiết tổ chức và hoạt động của Ban Thanh tra nhân dân ở doanh nghiệp nhà nước?",
        result: "Chính phủ quy định chi tiết tổ chức và hoạt động của Ban Thanh tra nhân dân ở doanh nghiệp nhà nước."
    },
    {
        question: "Luật thực hiện dân chủ ở cơ sở quy định Hội nghị người lao động được tổ chức định kỳ bao lâu một lần?",
        result: "Hội nghị người lao động được tổ chức định kỳ mỗi năm một lần sau khi kết thúc năm tài chính của doanh nghiệp nhưng không chậm hơn 03 tháng của năm tiếp theo do người đại diện có thẩm quyền của doanh nghiệp quyết định sau khi lấy ý kiến của Ban Chấp hành Công đoàn ở doanh nghiệp, ban đại diện của tổ chức đại diện khác của người lao động ở cơ sở (nếu có)."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, trường hợp nào dưới đây, hương ước, quy ước bị tạm ngừng thực hiện toàn bộ?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, thời hạn để Ủy ban nhân dân cấp xã quyết định việc tiến hành bầu Trưởng thôn, Tổ trưởng tổ dân phố mới là?",
        result: "60 ngày kể từ ngày có quyết định công nhận cho thôi làm Trưởng thôn, Tổ trưởng tổ dân phố."
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, quyết định của cộng đồng dân cư về chủ trương và mức đóng góp xây dựng cơ sở hạ tầng, các công trình công cộng trong phạm vi địa bàn cấp xã do Nhân dân đóng góp được thông qua khi nào?",
        result: "Khi có từ hai phần ba tổng số đại diện hộ gia đình trở lên trong xã tán thành."
    },
    {
        question: "Luật thực hiện dân chủ ở cơ sở quy định những nội dung nào khuyến khích doanh nghiệp nhà nước công khai?",
        result: "Các thông tin về việc bảo đảm đạo đức, văn hóa kinh doanh, việc thực hiện trách nhiệm xã hội của doanh nghiệp."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, trường hợp số lượng thành viên Ban Thanh tra nhân dân từ 09 người trở lên thì số lượng Phó Trưởng ban không quá bao nhiêu người?",
        result: "A.	Không quá 02 người"
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ, người lao động trực tiếp thực hiện việc kiểm tra, giám sát tại doanh nghiệp nhà nước thông qua hoạt động nào?",
        result: "Tất cả các đáp án"
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, việc xử lý kết quả kiểm tra, giám sát của người lao động ở doanh nghiệp nhà nước được quy định như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, cán bộ, công chức, viên chức, người lao động kiểm tra nội dung nào? ",
        result: "Cán bộ, công chức, viên chức, người lao động kiểm tra việc thực hiện các nội dung mà tập thể cán bộ, công chức, viên chức, người lao động đã bàn và quyết định như: bầu, cho thôi làm thành viên Ban Thanh tra nhân dân ở cơ quan, đơn vị; thu, chi, quản lý, sử dụng các khoản đóng góp của cán bộ, công chức, viên chức, người lao động tại cơ quan, đơn vị ngoài các khoản đã được pháp luật quy định; nội dung nghị quyết hội nghị cán bộ, công chức, viên chức, người lao động; các công việc tự quản khác trong nội bộ cơ quan, đơn vị không trái với quy định của pháp luật, phù hợp với đạo đức xã hội."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, trách nhiệm của Ủy ban nhân dân cấp xã được quy định như thế nào?",
        result: "Tất cả các đáp án"
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, việc xử lý vi phạm pháp luật về thực hiện dân chủ ở cơ sở đối với cá nhân được quy định như thế nào?",
        result: "Cá nhân có hành vi vi phạm pháp luật về thực hiện dân chủ ở cơ sở thì tùy theo tính chất, mức độ vi phạm mà bị xử phạt vi phạm hành chính, áp dụng biện pháp xử lý hành chính hoặc bị truy cứu trách nhiệm hình sự; nếu gây thiệt hại thì phải bồi thường theo quy định của pháp luật."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, cơ quan, cá nhân nào dưới đây có thẩm quyền quyết định số lượng cụ thể thành viên Ban Thanh tra nhân dân ở xã, phường, thị trấn?",
        result: "Ủy ban Mặt trận Tổ quốc Việt Nam cấp xã."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, cơ quan nào có trách nhiệm xây dựng và hướng dẫn sử dụng ứng dụng biểu quyết trực tuyến trên trang thông tin điện tử để các thôn, tổ dân phố lựa chọn và tổ chức biểu quyết trực tuyến đối với các nội dung Nhân dân bàn và quyết định trên địa bàn?",
        result: "Ủy ban nhân dân cấp tỉnh"
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, có thể hiểu thực hiện dân chủ ở cơ sở là gì?",
        result: "Thực hiện dân chủ ở cơ sở là phương thức phát huy quyền làm chủ của Nhân dân, để công dân, cán bộ, công chức, viên chức, người lao động được thông tin, thể hiện ý chí, nguyện vọng, chính kiến của mình thông qua việc thảo luận, tham gia ý kiến, quyết định và kiểm tra, giám sát các vấn đề ở cơ sở theo quy định của Hiến pháp và pháp luật."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đối tượng nào dưới đây phải chịu trách nhiệm trước pháp luật về tính chính xác của số lượng và danh sách hộ gia đình đồng thuận với sáng kiến của công dân?",
        result: "Công dân có sáng kiến."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, thông qua việc kiểm tra, giám sát trực tiếp, Nhân dân đánh giá mức độ hài lòng đối với các đối tượng nào dưới đây?",
        result: "Cán bộ, công chức cấp xã trực tiếp thực hiện thủ tục hành chính, giải quyết công việc của công dân."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, các hình thức lấy ý kiến Nhân dân bao gồm?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đối tượng nào dưới đây có thẩm quyền triệu tập và tổ chức cuộc họp của cộng đồng dân cư khi khuyết Trưởng thôn, Tổ trưởng Tổ dân phố?",
        result: "Chủ tịch Ủy ban nhân dân cấp xã."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nhiệm kỳ của Ban Thanh tra nhân dân ở xã, phường, thị trấn được quy định như thế nào?",
        result: "Nhiệm kỳ của Ban Thanh tra nhân dân theo nhiệm kỳ của Trưởng thôn, Tổ trưởng tổ dân phố trên cùng địa bàn."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, quyết định của cộng đồng dân cư về bầu, cho thôi làm thành viên Ban Thanh tra nhân dân, Ban Giám sát đầu tư của cộng đồng có hiệu lực khi nào?",
        result: "Kể từ ngày Ủy ban nhân dân cấp xã ban hành quyết định công nhận."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, việc công khai thông tin được thực hiện thông qua các hình thức nào sau đây?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đâu là trách nhiệm của Ủy ban Mặt trận Tổ quốc Việt Nam cấp xã trong việc bảo đảm hoạt động của Ban Giám sát đầu tư của cộng đồng?",
        result: "Chủ trì việc thành lập Ban Giám sát đầu tư của cộng đồng cho từng chương trình, dự án. Ban Thường trực Ủy ban Mặt trận Tổ quốc Việt Nam cấp xã quyết định số lượng thành viên; cử đại diện tham gia Ban Giám sát đầu tư của cộng đồng."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đâu là trách nhiệm của Trưởng thôn, Tổ trưởng tổ dân phố trong việc tổ chức để Nhân dân bàn, quyết định và thực hiện quyết định của cộng đồng dân cư?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, tổ chức có sử dụng lao động gồm?",
        result: "Tổ chức có sử dụng lao động gồm doanh nghiệp nhà nước và doanh nghiệp, tổ chức khác có thuê mướn, sử dụng lao động theo hợp đồng lao động thuộc khu vực ngoài Nhà nước."
    },
    {
        question: "Trách nhiệm của Ban lãnh đạo doanh nghiệp nhà nước trong việc tổ chức để người lao động tham gia ý kiến được Luật Thực hiện dân chủ ở cơ sở quy định như thế nào?",
        result: "Có trách nhiệm tổ chức lấy ý kiến người lao động về các nội dung quy định tại Điều 71 của Luật này; chịu trách nhiệm chỉ đạo, tổ chức việc tiếp nhận, tổng hợp ý kiến, thông tin phản hồi của người lao động; nghiên cứu, tiếp thu, giải trình ý kiến tham gia và thực hiện việc công khai nội dung giải trình, tiếp thu đến người lao động."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, cán bộ, công chức, viên chức, người lao động có thể tham gia ý kiến bằng hình thức nào sau đây?",
        result: "Tham gia ý kiến trực tiếp với người đứng đầu cơ quan, đơn vị hoặc thông qua người phụ trách các bộ phận của cơ quan, đơn vị."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, Ủy ban nhân dân cấp xã có trách nhiệm như thế nào trong xây dựng và thực hiện hương ước, quy ước?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, trách nhiệm của UBND cấp xã trong tổ chức thực hiện việc công khai thông tin là?",
        result: "Cung cấp thông tin theo yêu cầu của công dân theo quy định của Luật Tiếp cận thông tin đối với những thông tin trong thời hạn công khai nhưng chưa được công khai, thông tin hết thời hạn công khai theo quy định của pháp luật hoặc thông tin đang được công khai nhưng vì lý do bất khả kháng người yêu cầu không thể tiếp cận được."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nhiệm kỳ của Ban Thanh tra nhân dân ở doanh nghiệp nhà nước được quy định như thế nào?",
        result: "Nhiệm kỳ của Ban Thanh tra nhân dân là 02 năm. Trong nhiệm kỳ, nếu khuyết thành viên hoặc thành viên Ban Thanh tra nhân dân không hoàn thành nhiệm vụ, không còn được tín nhiệm hoặc xin thôi làm nhiệm vụ thì Ban Chấp hành Công đoàn ở doanh nghiệp, ban đại diện của tổ chức đại diện khác của người lao động ở cơ sở (nếu có) đề nghị hội nghị người lao động quyết định cho thôi làm nhiệm vụ và bầu người khác thay thế."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, trách nhiệm của các tổ chức chính trị - xã hội khác trong việc thực hiện tổ chức thực hiện pháp luật về thực hiện dân chủ ở sở sở được quy định như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nội dung nào người lao động tham gia ý kiến trước khi doanh nghiệp nhà nước quyết định?",
        result: "Việc xây dựng, sửa đổi, bổ sung nội quy, quy chế và các quy định nội bộ khác của doanh nghiệp có liên quan đến nghĩa vụ, quyền và lợi ích hợp pháp của người lao động."
    },
    {
        question: "Theo Luật thực hiện dân chủ ở cơ sở, nghĩa vụ của công dân trong thực hiện dân chủ ở cơ sở được quy định như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đâu là trách nhiệm của Chủ tịch Ủy ban nhân dân cấp xã trong việc tổ chức để Nhân dân tham gia ý kiến?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nội dung nào sau đây là trách nhiệm của người đứng đầu cơ quan, đơn vị trong việc bảo đảm để cán bộ, công chức, viên chức, người lao động thực hiện kiểm tra, giám sát?",
        result: "Kịp thời ngăn chặn hành vi tham nhũng, tiêu cực; tạo điều kiện để cơ quan, tổ chức có thẩm quyền xử lý người có hành vi tham nhũng, tiêu cực."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, cơ quan, cá nhân nào dưới đây có thẩm quyền công nhận hương ước, quy ước?",
        result: "Ủy ban nhân dân cấp xã."
    }
];

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    str = str.toLowerCase();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}