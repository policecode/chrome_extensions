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
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nội dung nào sau đây là một trong những trách nhiệm của Ban lãnh đạo doanh nghiệp nhà nước trong việc bảo đảm để người lao động thực hiện kiểm tra, giám sát?",
        result: "Phối hợp cùng Ban Chấp hành Công đoàn ở doanh nghiệp, ban đại diện của tổ chức đại diện khác của người lao động ở cơ sở (nếu có), căn cứ vào yêu cầu, nhiệm vụ, đặc điểm, tính chất tổ chức, hoạt động và điều kiện thực tế của doanh nghiệp, xây dựng và ban hành quy chế thực hiện dân chủ để quy định cụ thể hơn nội dung, cách thức thực hiện dân chủ ở doanh nghiệp mình làm cơ sở để người lao động kiểm tra, giám sát việc thực hiện. Nội dung của quy chế thực hiện dân chủ của doanh nghiệp có thể mở rộng hơn phạm vi thực hiện dân chủ của người lao động nhưng không được trái hoặc hạn chế việc thực hiện các nội dung đã được quy định trong Luật Thực hiện dân chủ ở cơ sở."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nhiệm vụ, quyền hạn của Ban Thanh tra nhân dân ở cơ quan, đơn vị được quy định như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, cán bộ, công chức, viên chức, người lao động giám sát nội dung nào?",
        result: "Cán bộ, công chức, viên chức, người lao động giám sát việc tổ chức thực hiện dân chủ ở cơ sở và việc thực hiện chính sách, pháp luật của người đứng đầu, ban lãnh đạo, người có thẩm quyền của cơ quan, đơn vị, hành vi hành chính của người thực thi công vụ, nhiệm vụ tại cơ quan, đơn vị."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, trách nhiệm của người đứng đầu cơ quan, đơn vị trong việc tổ chức để cán bộ, công chức, viên chức, người lao động bàn, quyết định và thực hiện quyết định của tập thể cán bộ, công chức, viên chức, người lao động như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, khẳng định nào sau đây là đúng về “Đại diện hộ gia đình”?",
        result: "Là người có năng lực hành vi dân sự đầy đủ, có khả năng đại diện được cho các thành viên hộ gia đình."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, quyết định của cộng đồng dân cư về việc thu, chi, quản lý các khoản đóng góp của Nhân dân tại cộng đồng dân cư ngoài các khoản đã được pháp luật quy định có phạm vi thực hiện trong địa bàn thôn, tổ dân phố được thông qua khi nào?",
        result: "Khi có từ hai phần ba tổng số đại diện hộ gia đình trở lên trong thôn, tổ dân phố tán thành."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, Trưởng thôn, Tổ trưởng tổ dân phố có trách nhiệm như thế nào trong xây dựng và thực hiện hương ước, quy ước?",
        result: "Tổ chức thực hiện hương ước, quy ước của cộng đồng dân cư sau khi được Ủy ban nhân dân cấp xã công nhận."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, hình thức công khai thông tin ở cơ quan, đơn vị được quy định như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nội dung nào sau đây được xác định là quyền thụ hưởng của công dân?",
        result: "Được thụ hưởng thành quả đổi mới, phát triển kinh tế - xã hội, chế độ an sinh xã hội, sự an toàn, ổn định của đất nước, của địa phương, cơ quan, đơn vị, tổ chức có sử dụng lao động và kết quả thực hiện dân chủ ở nơi mình cư trú, công tác, làm việc."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, kế hoạch tổ chức hội nghị định kỳ của cộng đồng dân cư được gửi đến đối tượng nào dưới đây để báo cáo, thống nhất trước khi thực hiện?",
        result: "Ủy ban nhân dân cấp xã."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, cơ quan, cá nhân nào dưới đây có thẩm quyền quyết định lựa chọn một hoặc một số hình thức tổ chức lấy ý kiến Nhân dân?",
        result: "Ủy ban nhân dân cấp xã."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đâu là trách nhiệm của Ủy ban nhân dân cấp xã trong việc bảo đảm hoạt động của Ban Giám sát đầu tư của cộng đồng?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, việc xử lý vi phạm pháp luật về thực hiện dân chủ ở cơ sở đối với tổ chức được quy định như thế nào?",
        result: "Tổ chức vi phạm quy định của Luật Thực hiện dân chủ ở cơ sở và quy định khác của pháp luật có liên quan đến thực hiện dân chủ ở cơ sở thì tùy theo tính chất, mức độ vi phạm mà bị xử phạt vi phạm hành chính; nếu gây thiệt hại thì phải bồi thường theo quy định của pháp luật."
    },
    {
        question: "Luật Thực hiện dân chủ ở cơ sở quy định khi nào thì Hội nghị người lao động được tổ chức bất thường?",
        result: "Hội nghị người lao động được tổ chức bất thường khi có ít nhất là một phần ba tổng số người lao động của doanh nghiệp cùng đề nghị liên quan đến việc lập các loại quỹ và thu, chi, quản lý, sử dụng các khoản từ thu nhập, đóng góp của người lao động."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, ý kiến đồng thuận với sáng kiến của công dân có giá trị trong thời hạn bao lâu kể từ ngày thể hiện ý kiến?",
        result: "03 tháng."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, cơ quan, cá nhân nào dưới đây có thẩm quyền quyết định số lượng Phó Trưởng ban Thanh tra nhân dân ở xã, phường, thị trấn?",
        result: "Ủy ban Mặt trận Tổ quốc Việt Nam cấp xã."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, trường hợp nào dưới đây, hương ước, quy ước cần được sửa đổi, bổ sung, thay thế?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, Ban Thanh tra nhân dân ở cơ quan, đơn vị gồm bao nhiêu thành viên?",
        result: "Ban Thanh tra nhân dân ở cơ quan, đơn vị do hội nghị cán bộ, công chức, viên chức, người lao động bầu gồm từ 03 đến 09 thành viên theo đề nghị của Ban Chấp hành Công đoàn cơ quan, đơn vị."
    },
    {
        question: "Luật Thực hiện dân chủ ở cơ sở quy định như thế nào về trách nhiệm của Ban Chấp hành Công đoàn ở doanh nghiệp, tổ chức đại diện khác của người lao động ở cơ sở trong việc tổ chức để người lao động tham gia ý kiến",
        result: "Ban Chấp hành Công đoàn ở doanh nghiệp, tổ chức đại diện khác của người lao động ở cơ sở (nếu có) tham gia phối hợp thực hiện việc tổ chức lấy ý kiến; giám sát việc lấy ý kiến của người lao động, kết quả giải trình, tiếp thu và tổ chức thực hiện các nội dung người lao động đã tham gia ý kiến; tham gia ý kiến trước khi doanh nghiệp quyết định ban hành quy chế thực hiện dân chủ của doanh nghiệp."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nội dung nào sau đây được Nhân dân bàn và quyết định?",
        result: "Việc thu, chi, quản lý các khoản đóng góp của Nhân dân tại cộng đồng dân cư ngoài các khoản đã được pháp luật quy định; việc thu, chi, quản lý các khoản kinh phí, tài sản do cộng đồng dân cư được giao quản lý hoặc được tiếp nhận từ các nguồn thu, tài trợ, ủng hộ hợp pháp khác."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, thời hạn để Trưởng thôn hoặc Tổ trưởng tổ dân phố gửi hồ sơ đề nghị công nhận hương ước, quy ước tới Ủy ban nhân dân cấp xã là?",
        result: "Chậm nhất sau 05 ngày làm việc, kể từ ngày tổ chức cuộc họp cộng đồng dân cư thông qua hương ước, quy ước hoặc ngày kết thúc thời hạn lấy ý kiến bằng phiếu."
    },

    {
        question: "Việc áp dụng pháp luật và quy định chuyển tiếp khi thực hiện Luật thực hiện dân chủ ở cơ sở được quy định như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đâu là nhiệm vụ của Ban Giám sát đầu tư của cộng đồng?",
        result: "Phát hiện những việc làm tổn hại đến lợi ích của cộng đồng; những tác động tiêu cực của dự án đến môi trường sinh sống của cộng đồng trong quá trình thực hiện đầu tư và vận hành dự án; những việc gây lãng phí, thất thoát vốn, tài sản thuộc các chương trình, dự án đầu tư."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đâu là trách nhiệm của Nhân dân trong việc tham gia ý kiến về các nội dung ở xã, phường, thị trấn?",
        result: "Cá nhân, hộ gia đình có trách nhiệm tham gia hoặc cử đại diện hộ gia đình tham dự họp bàn, thảo luận, thể hiện ý kiến đối với các nội dung theo yêu cầu của cấp có thẩm quyền."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, đâu là nguyên tắc xây dựng và thực hiện hương ước, quy ước?",
        result: "Phù hợp với đạo đức xã hội, phong tục, tập quán tốt đẹp; bảo vệ, giữ gìn, phát huy các giá trị văn hóa truyền thống; xây dựng các giá trị văn hóa mới, quy tắc ứng xử văn minh, phù hợp với đặc điểm tình hình của cộng đồng dân cư."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, nội dung nào người lao động tham gia ý kiến theo đề nghị của tổ chức đại diện người lao động?",
        result: "Nội dung thỏa ước lao động tập thể và đối thoại tại doanh nghiệp nhà nước."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, trách nhiệm của Ủy ban nhân dân cấp tỉnh trong xây dựng và thực hiện hương ước, quy ước của cộng đồng dân cư được quy định như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, nội dung nào sau đây là phương thức hoạt động của Ban Thanh tra nhân dân ở cơ quan, đơn vị?",
        result: "Kết quả kiểm tra, giám sát, xác minh được lập thành văn bản và gửi đến cơ quan, tổ chức, các nhân có phản ánh, kiến nghị. Trường hợp phát hiện người có hành vi vi phạm pháp luật thì kiến nghị cơ quan, tổ chức có thẩm quyền xem xét, xử lý theo quy định."
    },
    {
        question: "Theo Nghị định số 59/2023/NĐ-CP ngày 14/8/2023 của Chính phủ, số lượng thành viên Ban Giám sát đầu tư của cộng đồng là đại diện người dân trên địa bàn thôn, tổ dân phố nơi có chương trình, dự án do cơ quan nào quyết định?",
        result: "Do Ban Thường trực Ủy ban Mặt trận Tổ quốc Việt Nam cấp xã quyết định từ 05 - 07 người."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, thời điểm công khai thông tin đối với những lĩnh vực mà pháp luật liên quan chưa có quy định là?",
        result: "Chậm nhất là 10 ngày làm việc kể từ ngày có quyết định, văn bản của cơ quan có thẩm quyền về nội dung cần công khai."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, tại nơi không có đơn vị hành chính cấp xã thì cơ quan nào có trách nhiệm tổ chức thực hiện pháp luật về thực hiện dân chủ ở cơ sở?",
        result: "Hội đồng nhân dân và Ủy ban nhân dân cấp huyện."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, thông qua việc kiểm tra, giám sát, công dân có quyền nào dưới đây khi phát hiện ra hành vi, nội dung có dấu hiệu vi phạm?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Câu hỏi số 36: Theo Luật Thực hiện dân chủ ở cơ sở, cán bộ, công chức, viên chức, người lao động bàn và quyết định những nội dung nào sau đây?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, hương ước, quy ước được thông qua khi:",
        result: "Có trên 50% tổng số đại diện hộ gia đình trong cộng đồng dân cư tán thành."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, đâu là trách nhiệm của Ủy ban Mặt trận Tổ quốc Việt Nam cấp xã trong việc bảo đảm hoạt động của Ban Thanh tra nhân dân ở xã, phường, thị trấn?",
        result: "Hỗ trợ kinh phí hoạt động cho Ban Thanh tra nhân dân. Kinh phí hỗ trợ cho hoạt động của Ban Thanh tra nhân dân được sử dụng từ nguồn ngân sách nhà nước theo dự toán, kế hoạch hằng năm của Ủy ban Mặt trận Tổ quốc Việt Nam cấp xã, do ngân sách nhà nước cấp xã bảo đảm."
    },
    {
        question: "Luật Thực hiện dân chủ ở cơ sở quy định như thế nào về thời điểm công khai thông tin ở doanh nghiệp nhà nước?",
        result: "Chậm nhất là 15 ngày kể từ ngày có quyết định, văn bản của người có thẩm quyền về nội dung cần công khai, trừ trường hợp pháp luật có quy định khác."
    },
    {
        question: "Theo Nghị định số 61/2023/NĐ-CP ngày 16/8/2023 của Chính phủ, kinh phí thực hiện được quy định như thế nào?",
        result: "Tất cả các đáp án."
    },
    {
        question: "Theo Luật Thực hiện dân chủ ở cơ sở, người đứng đầu cơ quan, đơn vị có trách nhiệm như thế nào trong việc bảo đảm để cán bộ, công chức, viên chức, người lao động thực hiện việc kiểm tra, giám sát?",
        result: "Thực hiện các biện pháp phòng ngừa, ngăn chặn hành vi tham nhũng, tiêu cực; xử lý và tạo điều kiện để cơ quan, tổ chức có thẩm quyền xử lý người có hành vi tham nhũng, tiêu cực; nếu thiếu trách nhiệm để xảy ra tham nhũng, tiêu cực trong cơ quan, đơn vị thì bị xử lý theo quy định của pháp luật."
    },
    {
        question: "Cơ cấu, trách nhiệm của Ban Thanh tra nhân dân ở doanh nghiệp nhà nước được Luật Thực hiện dân chủ ở cơ sở quy định thế nào?",
        result: "Gồm trưởng ban, phó ban và các ủy viên. Trưởng ban chịu trách nhiệm chung về HĐ của ban TTND, phó trưởng ban chịu trách nhiệm giúp TB..., các thành viên khác thực hiện nhiệm vụ theo sự phân công."
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