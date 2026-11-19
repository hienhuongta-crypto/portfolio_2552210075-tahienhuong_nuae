import ch1Files from '../assets/images/ch1_file_organization_1794749538247.jpg';
import ch2Research from '../assets/images/ch2_academic_research_1794749539168.jpg';
import ch3Prompt from '../assets/images/ch3_ai_prompting_1794749540004.jpg';
import ch4Collab from '../assets/images/ch4_team_collaboration_1794749541009.jpg';
import ch5Creative from '../assets/images/ch5_digital_creation_1794749541522.jpg';
import ch6Ethics from '../assets/images/ch6_academic_integrity_1794749541412.jpg';
import { PortfolioData } from '../types/portfolio';

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  about: {
    fullName: 'Tạ Hiền Hương',
    academicYear: 'Sinh viên năm 2',
    major: 'Sư phạm Âm nhạc',
    courseName: 'Nhập môn Công nghệ số',
    email: 'hienhuongta@gmail.com',
    greeting: 'Xin chào, tôi là Tạ Hiền Hương',
    hobbies: ['Nhảy múa', 'Chơi nhạc cụ', 'Xem phim', 'Chụp ảnh', 'Edit video'],
    studyGoal:
      'Mục tiêu học tập của em đó là có thể nâng cao năng lực tự học và nghiên cứu âm nhạc. Không ngừng trau dồi kiến thức chuyên môn, nắm bắt những cơ hội thực chiến để ứng dụng vào công việc nghề nghiệp sau này (như dàn dựng tiết mục biểu diễn, lập kế hoạch tổ chức workshop âm nhạc, phân bổ nhiệm vụ hậu cần và truyền thông sự kiện).',
    universityOrientation:
      'Trở thành sinh viên năng động, tích cực tham gia các hoạt động của nhà trường; tích cực ứng dụng công nghệ số vào việc luyện tập chuyên môn (piano, sáo), thiết kế các bộ công cụ dạy học âm nhạc sáng tạo, và hoàn thiện kỹ năng sản xuất nội dung số phục vụ cho việc giảng dạy nghệ thuật thực tế.',
    postGradOrientation:
      'Trở thành một giáo viên Sư phạm Âm nhạc thế hệ mới – người không chỉ vững vàng về kỹ năng biểu diễn và phương pháp sư phạm truyền thống, mà còn ứng dụng công nghệ, AI và các giải pháp số để đổi mới cách tiếp cận âm nhạc cho học sinh, biến giờ học âm nhạc trở nên trực quan, hiện đại và đầy cảm hứng.',
    portfolioGoals: [
      {
        title: 'Hệ thống hóa quá trình rèn luyện',
        description:
          'Lưu trữ một cách khoa học toàn bộ các sản phẩm thực hành xuyên suốt học phần (từ quản lý tệp tin, nghiên cứu tài liệu học thuật, tối ưu câu lệnh AI đến quản trị dự án nhóm).',
      },
      {
        title: 'Minh chứng năng lực ứng dụng công nghệ',
        description:
          'Khẳng định khả năng làm chủ các công cụ số và vận dụng linh hoạt công nghệ vào giải quyết các bài toán thực tế trong chuyên ngành Sư phạm Âm nhạc.',
      },
      {
        title: 'Xây dựng bộ nguyên tắc nghề nghiệp',
        description:
          'Ghi dấu quá trình tự nhận thức và đúc kết bộ quy tắc sử dụng AI an toàn, văn minh, làm kim chỉ nam cho hoạt động học tập và giảng dạy sau này.',
      },
      {
        title: 'Nền tảng phát triển thương hiệu cá nhân',
        description:
          'Tạo tiền đề để tiếp tục mở rộng thành hồ sơ năng lực chuyên môn, phục vụ cho việc thực tập sư phạm, ứng tuyển việc làm và kết nối cộng đồng giáo viên sáng tạo trong tương lai.',
      },
    ],
    heroImage:
      './assets/aistudio/1794744208084_62227895373114535_1206011158121209286_941f140c8d7b4bf19beaa3dc21606f1b_77bf4f3a.jpg',
  },
  assignments: [
    {
      id: 'bai-tap-1',
      number: 1,
      chapterLabel: 'Chương 1: Máy tính và các thiết bị ngoại vi',
      title: 'Thao tác cơ bản với tệp tin và thư mục',
      subtitle: '',
      shortDescription:
        'Thực hành thiết lập cấu trúc thư mục khoa học trên máy tính để quản lý giáo án, bản nhạc, tệp ghi âm luyện tập piano và sáo.',
      coverImage: ch1Files,
      coverAlt: 'Bàn học với máy tính xách tay, sổ nhạc lý, âm thoa và tai nghe',
      isSampleContent: true,
      sampleNotice:
        'Nội dung mẫu có thể chỉnh sửa (chưa có tệp BT NMCNS.docx đính kèm). Nhấn "Chỉnh sửa nội dung" để dán nguyên văn mục 1 và tải ảnh chụp màn hình cây thư mục thực tế của bạn.',
      objectives: [
        'Nhận diện vai trò của máy tính và thiết bị ngoại vi phục vụ học tập âm nhạc (micro thu âm, tai nghe kiểm âm, bàn phím MIDI).',
        'Xây dựng hệ thống thư mục phân cấp rõ ràng theo học kỳ, môn học và loại tệp tin.',
        'Thực hành thao tác sao chép, di chuyển, đổi tên, nén tệp (.zip) và sao lưu an toàn.',
      ],
      sections: [],
      gallery: [
        {
          id: 'ch1-img-1',
          src: './assets/aistudio/1_2ebcaa1b.png',
          caption:
            '1. Mở File Explorer: Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.',
          alt: 'Thanh tác vụ Windows với biểu tượng thư mục File Explorer màu vàng được khoanh đỏ',
        },
        {
          id: 'ch1-img-2',
          src: './assets/aistudio/2_a3e0fa4a.png',
          caption: '2. Truy cập ổ đĩa/thư mục: Ở cột bên trái, nhấp vào This PC',
          alt: 'Cột điều hướng bên trái File Explorer với mục This PC được khoanh đỏ',
        },
        {
          id: 'ch1-img-3',
          src: './assets/aistudio/3_f701d605.png',
          caption:
            'Sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.',
          alt: 'Cửa sổ File Explorer hiển thị ổ đĩa New Volume (D:) được chọn',
        },
        {
          id: 'ch1-img-4',
          src: './assets/aistudio/4_ef2646c0.png',
          caption: '3. Tạo thư mục mới: Nhấp chuột phải vào một khoảng trống -> chọn New',
          alt: 'Menu chuột phải trong File Explorer với tùy chọn New được khoanh đỏ',
        },
        {
          id: 'ch1-img-5',
          src: './assets/aistudio/5_5e150baa.png',
          caption: '-> Folder.',
          alt: 'Menu chuột phải New với tùy chọn Folder được khoanh đỏ trong File Explorer',
        },
        {
          id: 'ch1-img-6',
          src: './assets/aistudio/6_293b7498.png',
          caption: '-> Đặt tên thư mục là ThucHanh_hotensinhvien. Nhấn Enter',
          alt: 'Đặt tên thư mục mới là ThucHanh_TaHienHuong trong File Explorer',
        },
        {
          id: 'ch1-img-7',
          src: './assets/aistudio/6_293b7498.png',
          caption: '4. Vào thư mục vừa tạo: Nhấp đúp vào thư mục ThucHanh_TaHienHuong.',
          alt: 'Thư mục ThucHanh_TaHienHuong được khoanh đỏ trong File Explorer để nhấp đúp mở',
        },
        {
          id: 'ch1-img-8',
          src: './assets/aistudio/7_93541d8e.png',
          caption: '5. Tạo tệp tin văn bản: Nhấp chuột phải vào khoảng trống',
          alt: 'Menu chuột phải bên trong thư mục ThucHanh_TaHienHuong trong File Explorer',
        },
        {
          id: 'ch1-img-9',
          src: './assets/aistudio/8_2__8859c8e2.png',
          caption: '- Chọn > New > Text Document.',
          alt: 'Menu chuột phải chọn New rồi chọn Text Document được khoanh đỏ trong File Explorer',
        },
        {
          id: 'ch1-img-10',
          src: './assets/aistudio/10_58ef0203.png',
          caption: '- Đặt tên là GhiChu.txt. Nhấn Enter.',
          alt: 'Đặt tên tệp tin văn bản mới là GhiChu.txt trong thư mục ThucHanh_TaHienHuong',
        },
        {
          id: 'ch1-img-11',
          src: './assets/aistudio/11_d4a35371.png',
          caption: '6. Đổi tên tệp tin: Nhấp chuột phải vào tệp GhiChu.txt > chọn Rename.',
          alt: 'Menu chuột phải vào tệp GhiChu.txt với biểu tượng Rename được khoanh đỏ trong File Explorer',
        },
        {
          id: 'ch1-img-12',
          src: './assets/aistudio/12_4891dc75.png',
          caption: '- Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.',
          alt: 'Đổi tên tệp tin thành GhiChuQuanTrong.txt trong thư mục ThucHanh_TaHienHuong',
        },
        {
          id: 'ch1-img-13',
          src: './assets/aistudio/14_fde0fb80.png',
          caption: '7. Tạo thư mục con: Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải',
          alt: 'Menu chuột phải trong thư mục ThucHanh_TaHienHuong để tạo thư mục con',
        },
        {
          id: 'ch1-img-14',
          src: './assets/aistudio/15_f817753d.png',
          caption: '- Chọn > New > Folder.',
          alt: 'Menu chuột phải chọn New rồi chọn Folder để tạo thư mục con',
        },
        {
          id: 'ch1-img-15',
          src: './assets/aistudio/17_3f89e745.png',
          caption: '- Đặt tên là TaiLieu',
          alt: 'Thư mục con mới đã được đặt tên là TaiLieu trong thư mục ThucHanh_TaHienHuong',
        },
        {
          id: 'ch1-img-16',
          src: './assets/aistudio/18_f989fef4.png',
          caption:
            '8. Sao chép tệp tin (Copy & Paste): Nhấp chuột phải vào tệp GhiChuQuanTrong.txt > chọn Copy (hoặc chọn tệp rồi nhấn Ctrl + C).',
          alt: 'Menu chuột phải vào tệp GhiChuQuanTrong.txt với biểu tượng Copy được khoanh đỏ',
        },
        {
          id: 'ch1-img-17',
          src: './assets/aistudio/19_8cf3a61e.png',
          caption: '- Nhấp đúp vào thư mục TaiLieu',
          alt: 'Chọn và nhấp đúp vào thư mục TaiLieu trong File Explorer',
        },
        {
          id: 'ch1-img-18',
          src: './assets/aistudio/20_d7593f88.png',
          caption:
            '- Nhấp chuột phải vào khoảng trống bên trong -> chọn Paste (hoặc nhấn Ctrl + V).',
          alt: 'Menu chuột phải bên trong thư mục TaiLieu với biểu tượng Paste được khoanh đỏ',
        },
        {
          id: 'ch1-img-19',
          src: './assets/aistudio/21_bceabd80.png',
          caption: 'Bây giờ bạn có một bản sao của tệp trong thư mục TaiLieu.',
          alt: 'Tệp GhiChuQuanTrong.txt đã được sao chép vào bên trong thư mục TaiLieu',
        },
        {
          id: 'ch1-img-20',
          src: './assets/aistudio/22_bf19ed8d.png',
          caption:
            '9. Di chuyển tệp tin (Cut & Paste): Quay lại thư mục ThucHanh_TaHienHuong.',
          alt: 'Quay lại thư mục ThucHanh_TaHienHuong để thực hiện di chuyển tệp tin',
        },
        {
          id: 'ch1-img-21',
          src: './assets/aistudio/23__2__8bf8d794.png',
          caption: '- Tạo một tệp mới.',
          alt: 'Menu chuột phải chọn New rồi chọn Text Document để tạo tệp mới trong ThucHanh_TaHienHuong',
        },
        {
          id: 'ch1-img-22',
          src: './assets/aistudio/24_73f20f33.png',
          caption: '- Đặt tên là DiChuyen.txt.',
          alt: 'Đặt tên tệp văn bản mới là DiChuyen.txt trong thư mục ThucHanh_TaHienHuong',
        },
        {
          id: 'ch1-img-23',
          src: './assets/aistudio/25_e9b80905.png',
          caption:
            '- Nhấp chuột phải vào tệp DiChuyen.txt → chọn Cut (hoặc chọn tệp rồi nhấn Ctrl + X).',
          alt: 'Menu chuột phải vào tệp DiChuyen.txt với biểu tượng Cut được khoanh đỏ',
        },
        {
          id: 'ch1-img-24',
          src: './assets/aistudio/26_105bb707.png',
          caption: 'Nhấp đúp vào thư mục TaiLieu.',
          alt: 'Chọn và nhấp đúp vào thư mục TaiLieu sau khi đã Cut tệp DiChuyen.txt',
        },
        {
          id: 'ch1-img-25',
          src: './assets/aistudio/27_6f80f965.png',
          caption:
            '- Nhấp chuột phải vào khoảng trống > chọn Paste (hoặc nhấn Ctrl + V).',
          alt: 'Menu chuột phải bên trong thư mục TaiLieu với biểu tượng Paste được khoanh đỏ',
        },
        {
          id: 'ch1-img-26',
          src: './assets/aistudio/28_fde8c7ee.png',
          caption:
            '- Tệp gốc đã biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.',
          alt: 'Kết quả sau khi Cut và Paste: tệp DiChuyen.txt đã nằm trong thư mục TaiLieu',
        },
        {
          id: 'ch1-img-27',
          src: './assets/aistudio/29_e61c4437.png',
          caption:
            '10. Xóa tệp tin: Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt',
          alt: 'Tệp GhiChuQuanTrong.txt được khoanh đỏ trong File Explorer để thực hiện thao tác xóa',
        },
        {
          id: 'ch1-img-28',
          src: './assets/aistudio/30_e8354c57.png',
          caption:
            '> Chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).',
          alt: 'Menu chuột phải vào tệp GhiChuQuanTrong.txt với biểu tượng Delete được khoanh đỏ',
        },
        {
          id: 'ch1-img-29',
          src: './assets/aistudio/31_0c290445.png',
          caption:
            '11. Xóa vĩnh viễn: Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác',
          alt: 'Hộp thoại xác nhận xóa vĩnh viễn tệp DiChuyen.txt khi nhấn Shift + Delete',
        },
        {
          id: 'ch1-img-30',
          src: './assets/aistudio/31.3_27673efa.png',
          caption: '- Chọn “Yes”:',
          alt: 'Hộp thoại xác nhận xóa vĩnh viễn tệp DiChuyen.txt với nút Yes được khoanh đỏ',
        },
        {
          id: 'ch1-img-31',
          src: './assets/aistudio/32__2__a4a70089.png',
          caption:
            '12. Khôi phục từ Thùng rác (Tùy chọn): Tìm biểu tượng Recycle Bin trên màn hình nền',
          alt: 'Biểu tượng Recycle Bin trên màn hình nền Desktop được khoanh đỏ',
        },
        {
          id: 'ch1-img-32',
          src: './assets/aistudio/33__2__f06def61.png',
          caption: '- Nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa',
          alt: 'Cửa sổ Recycle Bin hiển thị tệp GhiChuQuanTrong.txt đã xóa được khoanh đỏ',
        },
        {
          id: 'ch1-img-33',
          src: './assets/aistudio/34__2__d8d01e37.png',
          caption: '- Nhấp chuột phải vào nó và chọn Restore.',
          alt: 'Menu chuột phải trong Recycle Bin với tùy chọn Restore được khoanh đỏ',
        },
        {
          id: 'ch1-img-34',
          src: './assets/aistudio/35_feac409e.png',
          caption: '- Tệp sẽ quay trở lại vị trí ban đầu.',
          alt: 'Kết quả khôi phục: tệp GhiChuQuanTrong.txt đã quay trở lại thư mục TaiLieu',
        },
      ],
      resources: [
        {
          id: 'ch1-res-1',
          label: 'Thư mục lưu trữ bài tập Chương 1 (Liên kết mẫu Google Drive)',
          type: 'drive',
          url: '',
          note: 'Dán liên kết Google Drive hoặc file PDF minh chứng thực tế của bạn trong phần Chỉnh sửa.',
        },
      ],
    },
    {
      id: 'bai-tap-2',
      number: 2,
      chapterLabel: 'Chương 2: Khai thác dữ liệu và thông tin',
      title: 'Tìm kiếm và đánh giá thông tin học thuật',
      subtitle: '',
      shortDescription:
        'Thực hành sử dụng toán tử tìm kiếm nâng cao, lập bảng tiêu chí đánh giá nguồn học thuật và tổng hợp liên kết tham khảo.',
      coverImage: ch2Research,
      coverAlt: 'Sách chuyên ngành sư phạm âm nhạc, ghi chú nghiên cứu và máy tính bảng hiển thị bảng đánh giá',
      isSampleContent: false,
      sampleNotice: '',
      objectives: [
        'Sử dụng thành thạo toán tử tìm kiếm (dấu ngoặc kép "", site:, filetype:pdf) để lọc tài liệu học thuật.',
        'Đánh giá nguồn thông tin theo bộ tiêu chí học thuật (Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu, Trích dẫn, Tính cập nhật, Tổng quan).',
        'Lưu trữ có hệ thống bảng tổng hợp 16 nguồn tài liệu phục vụ viết tiểu luận và soạn giáo án âm nhạc.',
      ],
      sections: [],
      gallery: [],
      evaluationTable: [
        {
          id: 'row-1',
          sourceTitle:
            '1. ‘A systematic review of technology-enhanced music learning models: Impacts on music education’',
          author:
            'Nhóm tác giả quốc tế (Rashed Mohammadian và cộng sự) có chuyên môn sâu về công nghệ giáo dục.',
          publisher:
            'Tạp chí quốc tế Computers and Education Open (Nhà xuất bản Elsevier).',
          method:
            'Sử dụng phương pháp nghiên cứu tổng quan hệ thống (Systematic Review) quy mô lớn, phân tích chặt chẽ.',
          citation:
            'Hệ thống trích dẫn quốc tế chuẩn mực, có mã định danh DOI rõ ràng.',
          currency:
            'Rất mới (2026), cập nhật các xu hướng công nghệ giáo dục tiên tiến nhất.',
          overview:
            'Bài báo mang độ tin cậy cao, là tài liệu nền tảng cho các nghiên cứu tổng quan.',
        },
        {
          id: 'row-2',
          sourceTitle:
            '2. ‘Analysis of music teaching in basic education integrating scientific computing visualization and computer music technology’.',
          author:
            'Y. Zhao, nhà nghiên cứu chuyên sâu về công nghệ máy tính và giáo dục âm nhạc.',
          publisher:
            'Tạp chí quốc tế Mathematical Problems in Engineering (Hindawi/Wiley).',
          method:
            'Phân tích kỹ thuật trực quan hóa tính toán và công nghệ máy tính trong giáo dục âm nhạc.',
          citation:
            'Hệ thống trích dẫn học thuật quốc tế đầy đủ, có mã DOI kiểm chứng.',
          currency: 'Ổn định năm 2022, cung cấp góc nhìn kỹ thuật chuyên sâu.',
          overview:
            'Bài báo mang độ tin cậy cao, cung cấp cơ sở kỹ thuật máy tính chuyên sâu cho giáo dục âm nhạc cơ bản',
        },
        {
          id: 'row-3',
          sourceTitle:
            '3. ‘Chuyển đổi số trong giảng dạy lý luận âm nhạc tại các trường sư phạm nghệ thuật: Cơ hội và định hướng phát triển’',
          author:
            'Nhóm giảng viên và nhà nghiên cứu trong nước về lý luận và chuyển đổi số âm nhạc.',
          publisher:
            'Tạp chí Khoa học Trường Đại học Mở Hà Nội (tạp chí khoa học có chuẩn ISSN).',
          method:
            'Phân tích lý luận, đánh giá thực trạng cơ hội và định hướng phát triển chuyển đổi số.',
          citation: 'Có hệ thống trích dẫn khoa học đầy đủ, liên kết DOI rõ ràng.',
          currency:
            'Cập nhật năm 2025, bám sát chủ trương chuyển đổi số giáo dục nghệ thuật.',
          overview:
            'Bài báo mang độ tin cậy cao, phù hợp làm cơ sở lý luận về chuyển đổi số lý luận âm nhạc.',
        },
        {
          id: 'row-4',
          sourceTitle:
            '4. ‘Dạy học âm nhạc trực tuyến tại Trường Đại học Sư phạm Nghệ thuật Trung ương’',
          author:
            'Giảng viên đang công tác trực tiếp tại Trường Đại học Sư phạm Nghệ thuật Trung ương.',
          publisher:
            'Tạp chí Khoa học Giáo dục Việt Nam (Viện Khoa học Giáo dục Việt Nam)',
          method:
            'Nghiên cứu thực tiễn về dạy học âm nhạc trực tuyến tại cơ sở đào tạo chuyên ngành',
          citation:
            'Có hệ thống tài liệu tham khảo và dẫn chứng số liệu xác thực qua hệ thống VJOL.',
          currency:
            'Cập nhật (2025), có giá trị liên hệ thực tiễn sát thực với nhà trường.',
          overview:
            'Bài báo mang độ tin cậy cao, tài liệu tham khảo trực tiếp gắn liền với môi trường học tập của sinh viên.',
        },
        {
          id: 'row-5',
          sourceTitle: '5. Giáo trình Ứng dụng công nghệ thông tin trong dạy học',
          author: 'ThS. Đỗ Mạnh Cường',
          publisher: 'NXB Đại học Quốc gia TP.HCM',
          method:
            'Áp dụng phương pháp tổng quan tài liệu có hệ thống và xây dựng mô hình thiết kế sư phạm',
          citation: 'Hệ thống thông số phong phú, tuân thủ chặt chẽ tiêu chuẩn hàn lâm',
          currency: 'Cung cấp khung lý thuyết nền tảng sư phạm chuẩn',
          overview:
            'Giáo trình chính thống, độ tin cậy cao, thích hợp làm nền tảng lý luận sư phạm',
        },
        {
          id: 'row-6',
          sourceTitle:
            '6. ‘Khai thác và sử dụng nội dung trên các nền tảng số vào giảng dạy học phần Guitar cho sinh viên Sư phạm Âm nhạc tại Khoa Nghệ thuật, Trường Đại học Sư phạm Hà Nội: Thực trạng và giải pháp’',
          author:
            'Giảng viên, nhà nghiên cứu chuyên ngành tại Khoa Nghệ thuật, Trường Đại học Sư phạm Hà Nội.',
          publisher: 'Tạp chí Giáo dục',
          method:
            'Áp dụng phương pháp khảo sát thực trạng, phân tích tổng hợp và đề xuất giải pháp thực tiễn.',
          citation:
            'Có danh mục tài liệu tham khảo đầy đủ, bám sát chuyên môn Guitar sư phạm.',
          currency:
            'Cập nhật năm 2024, rất phù hợp và sát sườn với thực trạng đào tạo hiện nay',
          overview:
            'Bài báo mang độ tin cậy cao, có giá trị sử dụng trong các bài tập học thuật chuyên ngành Sư phạm Âm nhạc.',
        },
        {
          id: 'row-7',
          sourceTitle:
            '7. Quyết định số 131/QĐ-TTg ngày 25/01/2022 về việc phê duyệt Đề án tăng cường ứng dụng công nghệ thông tin và chuyển đổi số trong giáo dục và đào tạo giai đoạn 2022–2025, định hướng đến năm 2030.',
          author: 'Cơ quan lập pháp và hành pháp cao nhất của Nhà nước Việt Nam.',
          publisher: 'Cổng Thông tin điện tử Chính phủ',
          method:
            'Phương pháp hoạch định chính sách chiến lược và văn bản quy phạm pháp luật quốc gia.',
          citation: 'Là văn bản pháp lý gốc có hiệu lực pháp lý cao nhất trong danh mục.',
          currency:
            'Là nền tảng pháp lý cốt lõi cho định hướng chuyển đổi số giáo dục giai đoạn 2022–2030.',
          overview:
            'Văn bản mang độ tin cậy tuyệt đối, là cơ sở pháp lý bắt buộc phải có trong các bài nghiên cứu chính sách.',
        },
        {
          id: 'row-8',
          sourceTitle:
            '8. Sử dụng Wesing và Movie Maker trong dạy học cảm thụ âm nhạc: Hiệu quả và tiềm năng',
          author:
            'Nhóm tác giả thực hiện nghiên cứu thực nghiệm ứng dụng phần mềm.',
          publisher: 'Tạp chí Khoa học Giáo dục Việt Nam',
          method:
            'Nghiên cứu thực nghiệm sư phạm, kiểm chứng hiệu quả của công cụ phần mềm cụ thể',
          citation:
            'Dẫn chứng nguồn tài liệu và minh chứng sản phẩm ứng dụng thực tế rõ ràng.',
          currency:
            'Cập nhật năm 2024, có tính ứng dụng công nghệ thực tế cao cho giáo dục phổ thông.',
          overview:
            'Bài báo mang độ tin cậy cao, minh họa trực quan cách áp dụng phần mềm cụ thể vào giờ học âm nhạc.',
        },
        {
          id: 'row-9',
          sourceTitle:
            '9. Teaching Music with Technology (Dạy âm nhạc với công nghệ)',
          author:
            'Thomas E. Rudolph (Chuyên gia hàng đầu thế giới về công nghệ âm nhạc)',
          publisher:
            'Oxford University Press (NXB Đại học Oxford – NXB hàn lâm top đầu thế giới)',
          method:
            'Thực chứng, tổng hợp thực tiễn kết hợp nghiên cứu trường hợp về ứng dụng công nghệ âm nhạc',
          citation:
            'Trích dẫn chuẩn mực quốc tế phong phú, tuân thủ chặt chẽ tiêu chuẩn hàn lâm',
          currency: 'Cập nhật xu hướng công nghệ âm nhạc chuyên sâu',
          overview:
            'Nguồn tài liệu chuẩn mực cao về chuyên ngành Sư phạm Âm nhạc, thẩm định quốc tế khắt khe.',
        },
        {
          id: 'row-10',
          sourceTitle: '10. Technology in Education – A Tool on Whose Terms?',
          author:
            'Đội ngũ chuyên gia toàn cầu thuộc Tổ chức Giáo dục, Khoa học và Văn hóa Liên Hợp Quốc.',
          publisher:
            'UNESCO Publishing (Cơ quan quốc tế tối cao về tiêu chuẩn giáo dục).',
          method:
            'Báo cáo giám sát toàn cầu dựa trên phân tích dữ liệu vĩ mô và khảo sát đa quốc gia.',
          citation:
            'Cực kỳ phong phú, chuẩn hóa quốc tế với mã định danh DOI đầy đủ.',
          currency:
            'Báo cáo chiến lược định hướng lớn cho giai đoạn giáo dục số hiện tại.',
          overview:
            'Tài liệu mang độ tin cậy tối đa, cung cấp góc nhìn và chuẩn mực chính sách giáo dục số toàn cầu.',
        },
        {
          id: 'row-11',
          sourceTitle:
            '11. The Auxiliary Role of College Music in Teaching in View of Artificial Intelligence',
          author:
            'J. Liu, nhà nghiên cứu chuyên về ứng dụng công nghệ thông minh trong nghệ thuật.',
          publisher:
            'Tạp chí quốc tế ISI/Scopus Mathematical Problems in Engineering (Hindawi/Wiley).',
          method:
            'Ứng dụng mô hình tính toán khoa học và trí tuệ nhân tạo (AI) trong âm nhạc học đường.',
          citation:
            'Có đầy đủ mã định danh DOI và danh mục tham khảo học thuật quốc tế.',
          currency:
            'Ổn định năm 2022, phù hợp khi phân tích góc nhìn AI hỗ trợ âm nhạc.',
          overview:
            'Bài báo mang độ tin cậy cao, bổ sung góc nhìn chuyên sâu về ứng dụng Trí tuệ nhân tạo (AI) trong âm nhạc.',
        },
        {
          id: 'row-12',
          sourceTitle:
            '12. The Content of Professional Information Competence of Future Teachers of Music Art.',
          author:
            'Z. O. Oleksandrovych, chuyên gia nghiên cứu năng lực thông tin của giáo viên âm nhạc.',
          publisher:
            'Tạp chí quốc tế International Journal of Innovative Technologies in Social Science.',
          method:
            'Phân tích nội dung và cấu trúc năng lực nghề nghiệp sư phạm âm nhạc.',
          citation: 'Trích dẫn các tài liệu nghiên cứu sư phạm châu Âu và quốc tế.',
          currency: 'Ổn định năm 2022, hỗ trợ đắc lực cho luận điểm về năng lực số.',
          overview:
            'Bài báo mang độ tin cậy cao, tài liệu tốt để phân tích năng lực số của giáo viên âm nhạc tương lai.',
        },
        {
          id: 'row-13',
          sourceTitle:
            '13. Tổng quan nghiên cứu ứng dụng công nghệ thông tin trong dạy học âm nhạc.',
          author:
            'Nhà nghiên cứu thuộc Trường Đại học Giáo dục, Đại học Quốc gia Hà Nội',
          publisher: 'Tạp chí Tâm lý giáo dục (Cơ quan thuộc khối ĐHQGHN).',
          method:
            'Tổng quan nghiên cứu khoa học chuyên ngành về CNTT trong dạy học âm nhạc.',
          citation:
            'Trích dẫn rõ ràng các công trình nghiên cứu trong và ngoài nước trước đó.',
          currency: 'Cập nhật năm 2024, cung cấp khung tổng quan lý thuyết tốt.',
          overview:
            'Bài báo mang độ tin cậy cao, hữu ích để xây dựng khung lý thuyết tổng quan về công nghệ âm nhạc.',
        },
        {
          id: 'row-14',
          sourceTitle:
            '14. Understanding the role of digital technologies in education: A review.',
          author:
            'Nhóm chuyên gia quốc tế (Abid Haleem và cộng sự) có uy tín cao trong lĩnh vực công nghệ số.',
          publisher:
            'Nhà xuất bản quốc tế Elsevier (tạp chí khoa học có bình duyệt peer-review).',
          method:
            'Phương pháp tổng quan tài liệu (Review methodology) về vai trò công nghệ trong giáo dục.',
          citation:
            'Hệ thống tài liệu phong phú, định dạng chuẩn quốc tế với mã DOI.',
          currency:
            'Khá tốt (2022), tạo nền tảng lý thuyết chung vững chắc về công nghệ giáo dục.',
          overview:
            'Bài báo mang độ tin cậy cao, giúp củng cố nền tảng lý luận chung về chuyển đổi số giáo dục.',
        },
        {
          id: 'row-15',
          sourceTitle:
            '15. Ứng dụng CNTT trong đổi mới phương pháp dạy học nhằm nâng cao chất lượng giáo dục của các trường THPT ở tỉnh Đồng Nai',
          author: 'Nguyễn Thị Thu Lan',
          publisher: 'Tạp chí Khoa học Giáo dục Việt Nam',
          method:
            'Sử dụng phương pháp điều tra khảo sát thực địa và phân tích thực trạng',
          citation: 'Có chọn lọc tài liệu chính sách và thực tiễn giáo dục',
          currency:
            'Thông tin mang tính lịch sử (2006), phản ánh bối cảnh giai đoạn trước',
          overview:
            'Bài báo khoa học uy tín nhưng dữ liệu khảo sát đã cũ, dùng tốt cho phần tổng quan lịch sử nghiên cứu.',
        },
        {
          id: 'row-16',
          sourceTitle:
            '16. Ứng dụng công nghệ thông tin trong đổi mới phương pháp dạy học âm nhạc trong kỷ nguyên số',
          author: 'TS. Lương Minh Tân',
          publisher: 'Hội Nhạc sĩ Việt Nam',
          method:
            'Phân tích lý luận kết hợp đúc kết thực tiễn giảng dạy âm nhạc hiện đại',
          citation: 'Trích dẫn các xu hướng công nghệ âm nhạc mới',
          currency: 'Cập nhật nhanh xu hướng phát triển mới của kỷ nguyên số',
          overview:
            'Bài viết chuyên ngành đúng định hướng Sư phạm Âm nhạc, mang tính thực tiễn và thời sự cao.',
        },
      ],
      harvardReferences: [
        {
          id: 'ref-1',
          authorYear: 'Cao Sỹ Anh Tùng (2024)',
          articleTitle:
            '‘Khai thác và sử dụng nội dung trên các nền tảng số vào giảng dạy học phần Guitar cho sinh viên Sư phạm Âm nhạc tại Khoa Nghệ thuật, Trường Đại học Sư phạm Hà Nội: Thực trạng và giải pháp’,',
          italicTitle: 'Tạp chí Giáo dục',
          publicationDetails: '.',
          url: 'https://tcgd.tapchigiaoduc.edu.vn/index.php/tapchi/article/view/7353',
        },
        {
          id: 'ref-2',
          authorYear: 'Đặng Văn Phúc (2024)',
          italicTitle:
            'Tổng quan nghiên cứu ứng dụng công nghệ thông tin trong dạy học âm nhạc',
          publicationDetails: '. Hà Nội: Trường Đại học Giáo dục, ĐHQG Hà Nội.',
          url: 'https://tamlygiaoduc.com.vn/wp-content/uploads/2024/05/19-23.pdf',
        },
        {
          id: 'ref-3',
          authorYear: 'Đỗ Mạnh Cường (2006)',
          italicTitle:
            'Giáo trình ứng dụng công nghệ thông tin trong dạy học',
          publicationDetails: '. TP. Hồ Chí Minh: NXB Đại học Quốc gia TP.HCM.',
          url: 'https://thuvien.qui.edu.vn/giao-trinh-ung-dung-cong-nghe-thong-tin-trong-day-hoc-4915.html',
        },
        {
          id: 'ref-4',
          authorYear: 'Haleem, A., Javaid, M., Qadri, M. A. and Suman, R. (2022)',
          articleTitle:
            '‘Understanding the role of digital technologies in education: A review’,',
          italicTitle: 'Sustainable Operations and Computers',
          publicationDetails: ', 3, tr. 275–285.',
          url: 'https://www.sciencedirect.com/science/article/pii/S2666412722000137',
        },
        {
          id: 'ref-5',
          authorYear: 'Liu, J. (2022)',
          articleTitle:
            '‘The Auxiliary Role of College Music in Teaching in View of Artificial Intelligence’,',
          italicTitle: 'Mathematical Problems in Engineering',
          publicationDetails: ', 2022, tr. 1–9.',
          url: 'https://onlinelibrary.wiley.com/doi/10.1155/2022/2693199',
        },
        {
          id: 'ref-6',
          authorYear: 'Lương Minh Tân (2024)',
          articleTitle:
            '‘Ứng dụng công nghệ thông tin trong đổi mới phương pháp dạy học âm nhạc trong kỷ nguyên số’,',
          italicTitle: 'Hội Nhạc sĩ Việt Nam',
          publicationDetails: '.',
          url: 'https://hoinhacsi.vn/news/ung-dung-cong-nghe-thong-tin-trong-doi-moi-phuong-phap-day-hoc-am-nhac-trong-ky-nguyen-so',
        },
        {
          id: 'ref-7',
          authorYear: 'Lương Minh Tân và Nguyễn Thị Tố Mai (2025)',
          articleTitle:
            '‘Dạy học âm nhạc trực tuyến tại Trường Đại học Sư phạm Nghệ thuật Trung ương’,',
          italicTitle: 'Tạp chí Khoa học Giáo dục Việt Nam',
          publicationDetails: '.',
          url: 'https://www.vjol.info.vn/DHSP-GD/vi/article/view/139478',
        },
        {
          id: 'ref-8',
          authorYear:
            'Mohammadian, R., Pourroostaei Ardakani, S. and Zaraii Zavaraki, E. (2026)',
          articleTitle:
            '‘A systematic review of technology-enhanced music learning models: Impacts on music education’,',
          italicTitle: 'Computers and Education Open',
          publicationDetails: ', 10, tr. 100354.',
          url: 'https://www.sciencedirect.com/science/article/pii/S266655732600025X',
        },
        {
          id: 'ref-9',
          authorYear: 'Nguyễn Thành Vinh, Nguyễn Hải Yến và Phan Thùy Nhung (2025)',
          articleTitle:
            '‘Chuyển đổi số trong giảng dạy lý luận âm nhạc tại các trường sư phạm nghệ thuật: Cơ hội và định hướng phát triển’,',
          italicTitle: 'Tạp chí Khoa học Trường Đại học Mở Hà Nội',
          publicationDetails: '.',
          url: 'https://jshou.edu.vn/houjs/article/view/870',
        },
        {
          id: 'ref-10',
          authorYear: 'Nguyễn Thị Thu Lan (2006)',
          articleTitle:
            '‘Ứng dụng công nghệ thông tin trong đổi mới phương pháp dạy học nhằm nâng cao chất lượng giáo dục của các trường trung học phổ thông ở tỉnh Đồng Nai’,',
          italicTitle: 'Tạp chí Khoa học Giáo dục Việt Nam',
          publicationDetails: ', (15), tr. 26.',
          url: 'http://vjes.vnies.edu.vn/vi/ung-dung-cong-nghe-thong-tin-trong-doi-moi-phuong-phap-day-hoc-nham-nang-cao-chat-luong-giao-duc-cua',
        },
        {
          id: 'ref-11',
          authorYear: 'Oleksandrovych, Z. O. (2022)',
          articleTitle:
            '‘The Content of Professional Information Competence of Future Teachers of Music Art’,',
          italicTitle:
            'International Journal of Innovative Technologies in Social Science',
          publicationDetails: ', 1(33).',
          url: 'https://rspublisher.org/index.php/ijitss/article/view/2242',
        },
        {
          id: 'ref-12',
          authorYear: 'Rudolph, T. (2017)',
          italicTitle: 'Teaching Music with Technology',
          publicationDetails: '. Oxford: Oxford University Press.',
          url: 'https://ciufo.org/classes/682_13/media/teching_tech_intro.pdf',
        },
        {
          id: 'ref-13',
          authorYear: 'Thủ tướng Chính phủ (2022)',
          italicTitle:
            'Quyết định số 131/QĐ-TTg ngày 25/01/2022 về việc phê duyệt Đề án tăng cường ứng dụng công nghệ thông tin và chuyển đổi số trong giáo dục và đào tạo giai đoạn 2022–2025, định hướng đến năm 2030',
          publicationDetails: '. Hà Nội.',
          url: 'https://vanban.chinhphu.vn/?pageid=27160&docid=205236&classid=0',
        },
        {
          id: 'ref-14',
          authorYear:
            'Trần Quốc Việt, Trần Yến Nhi, Trần Mỹ Linh và Trần Triệu Phong (2024)',
          articleTitle:
            '‘Sử dụng Wesing và Movie Maker trong dạy học cảm thụ âm nhạc: Hiệu quả và tiềm năng’,',
          italicTitle: 'Tạp chí Khoa học Giáo dục Việt Nam',
          publicationDetails: ', 20(Số S2), tr. 126–130.',
          url: 'http://vjes.vnies.edu.vn/sites/default/files/khgdvn_-_tap_20_-_so_s2_-126-130.pdf',
        },
        {
          id: 'ref-15',
          authorYear: 'UNESCO (2023)',
          italicTitle:
            'Global Education Monitoring Report 2023: Technology in Education – A Tool on Whose Terms?',
          publicationDetails: '. Paris: UNESCO.',
          url: 'https://unesdoc.unesco.org/ark:/48223/pf0000385723.page=271',
        },
        {
          id: 'ref-16',
          authorYear: 'Zhao, Y. (2022)',
          articleTitle:
            '‘Analysis of music teaching in basic education integrating scientific computing visualization and computer music technology’,',
          italicTitle: 'Mathematical Problems in Engineering',
          publicationDetails: ', 2022, tr. 1–9.',
          url: 'https://onlinelibrary.wiley.com/doi/10.1155/2022/3928889',
        },
      ],
      resources: [
        {
          id: 'ch2-res-1',
          label: 'Google Scholar — Cổng tra cứu bài báo khoa học',
          type: 'web',
          url: 'https://scholar.google.com',
          note: 'Đường dẫn tham khảo mẫu — thay bằng các link trích từ BT NMCNS.docx.',
        },
        {
          id: 'ch2-res-2',
          label: 'Tài liệu tổng hợp Bài tập 2 (PDF / Drive mẫu)',
          type: 'pdf',
          url: '',
          note: 'Chưa gắn tệp PDF thực tế; có thể chèn link Drive hoặc PDF của bạn.',
        },
      ],
    },
    {
      id: 'bai-tap-3',
      number: 3,
      chapterLabel: 'Chương 3: Tổng quan về trí tuệ nhân tạo',
      title: 'Viết Prompt hiệu quả cho các tác vụ học tập',
      subtitle: '',
      shortDescription:
        'Thực hành thiết kế câu lệnh có cấu trúc rõ vai trò, bối cảnh, nhiệm vụ và tiêu chí đầu ra để AI hỗ trợ hiệu quả trong học tập sư phạm.',
      coverImage: ch3Prompt,
      coverAlt: 'Góc học tập với laptop hiển thị bản nhạc, máy đếm nhịp gỗ và đèn bàn ánh sáng ấm',
      isSampleContent: false,
      sampleNotice: '',
      objectives: [
        'Thực hành thử nghiệm và tinh chỉnh câu lệnh (Prompt) qua 3 tác vụ chuyên ngành Sư phạm Âm nhạc.',
        'Đối chiếu chất lượng phản hồi của AI theo các phiên bản Prompt để rút ra lý do hiệu quả.',
        'Tổng hợp nguyên tắc, mẹo viết Prompt hiệu quả và bài học ứng dụng AI có trách nhiệm trong học tập.',
      ],
      sections: [
        {
          id: 'bt3-sec-1',
          heading:
            '1. Tác vụ 1: Tóm tắt tài liệu “Sử dụng phương pháp dạy đọc nhạc cho học sinh tiểu học đáp ứng Chương trình Giáo dục phổ thông 2018 môn Âm nhạc” – Mai Linh Chi',
          body: '',
          images: [
            {
              id: 'bt3-t1-img-1',
              src: './assets/aistudio/Screenshot__34__ef2064fd.png',
              caption: '-Promt cơ bản:',
              alt: 'Ảnh chụp màn hình Prompt cơ bản tóm tắt tài liệu Sử dụng phương pháp dạy đọc nhạc cho học sinh tiểu học của Mai Linh Chi',
            },
            {
              id: 'bt3-t1-img-2',
              src: './assets/aistudio/Screenshot__37__043ddca5.png',
              caption: '-Prompt cải tiến:',
              alt: 'Ảnh chụp màn hình Prompt cải tiến tóm tắt tài liệu Sử dụng phương pháp dạy đọc nhạc cho học sinh tiểu học của Mai Linh Chi',
            },
            {
              id: 'bt3-t1-img-3',
              src: './assets/aistudio/Screenshot__42__d93f061b.png',
              caption: '-Prompt nâng cao',
              alt: 'Ảnh chụp màn hình Prompt nâng cao tóm tắt tài liệu Sử dụng phương pháp dạy đọc nhạc cho học sinh tiểu học của Mai Linh Chi',
            },
          ],
          table: {
            headers: [
              'Tiêu chí',
              'Prompt cơ bản',
              'Prompt cải tiến',
              'Prompt nâng cao',
            ],
            rows: [
              {
                id: 't1-row-1',
                cells: [
                  '1. Yêu cầu chính',
                  'Đọc và tóm tắt sơ lược tài liệu.',
                  'Tóm tắt theo cấu trúc gồm 4 nội dung cụ thể.',
                  'Phân tích bài báo theo quy trình nghiên cứu học thuật và cấu trúc 5 phần.',
                ],
              },
              {
                id: 't1-row-2',
                cells: [
                  '2. Cách đặt yêu cầu',
                  'Ngắn gọn, chưa quy định rõ nội dung cần khai thác.',
                  'Xác định rõ các nội dung cần tóm tắt.',
                  'Xác định vai trò chuyên gia, quy trình phân tích, tiêu chuẩn đầu ra và ràng buộc về độ chính xác.',
                ],
              },
              {
                id: 't1-row-3',
                cells: [
                  '3. Cấu trúc đầu ra',
                  'Tóm tắt nội dung chính, phương pháp, kết luận và nhận xét.',
                  'Gồm: giới thiệu vấn đề; luận điểm chính; dữ liệu, bằng chứng; kết luận.',
                  'Gồm: thông tin tổng quan; bối cảnh và lý thuyết; phương pháp thực nghiệm; kết quả; khuyến nghị sư phạm.',
                ],
              },
              {
                id: 't1-row-4',
                cells: [
                  '4. Mức độ chi tiết',
                  'Khái quát.',
                  'Cụ thể, có hệ thống.',
                  'Yêu cầu trích xuất kết quả định lượng, định tính, đối tượng, quy mô mẫu và công cụ đo lường.',
                ],
              },
              {
                id: 't1-row-5',
                cells: [
                  '5. Yêu cầu về dữ liệu',
                  'Không yêu cầu cụ thể.',
                  'Yêu cầu chỉ ra dữ liệu hoặc bằng chứng quan trọng.',
                  'Yêu cầu trích xuất kết quả định lượng, định tính, đối tượng, quy mô mẫu và công cụ đo lường.',
                ],
              },
              {
                id: 't1-row-6',
                cells: [
                  '6. Yêu cầu về độ chính xác',
                  'Chưa có ràng buộc rõ ràng.',
                  'Có cấu trúc giới hạn nội dung.',
                  'Nhấn mạnh không suy diễn, chỉ sử dụng thông tin có trong văn bản và giữ chính xác thuật ngữ chuyên ngành.',
                ],
              },
              {
                id: 't1-row-7',
                cells: [
                  '7. Kết quả nhận được',
                  'Cung cấp cái nhìn tổng quan về nội dung, ba phương pháp Dalcroze, Kodály và Orff-Schulwerk.',
                  'Nội dung được sắp xếp logic, cô đọng hơn, làm rõ bối cảnh, luận điểm và bằng chứng.',
                  'Phân tích sâu hơn về cơ sở lý luận, cách triển khai và giá trị ứng dụng; đồng thời chỉ ra những thông tin bài báo không cung cấp.',
                ],
              },
              {
                id: 't1-row-8',
                cells: [
                  '8. Hạn chế',
                  'Nội dung còn khái quát, chưa phân biệt rõ thông tin lý luận và kết quả thực nghiệm.',
                  'Chưa khai thác sâu phương pháp nghiên cứu và tính ứng dụng.',
                  'Yêu cầu khá phức tạp; cần kiểm chứng kỹ để tránh yêu cầu AI tạo ra số liệu hoặc quy trình thực nghiệm không có trong tài liệu.',
                ],
              },
            ],
          },
        },
        {
          id: 'bt3-sec-2',
          heading: '2. Tác vụ 2: Giải thích khái niệm “Vô điệu tính” trong âm nhạc',
          body: '',
          images: [
            {
              id: 'bt3-t2-img-1',
              src: './assets/aistudio/Screenshot__47__79a0fe3e.png',
              caption: '-Promt cơ bản:',
              alt: 'Ảnh chụp màn hình Prompt cơ bản giải thích khái niệm Vô điệu tính trong âm nhạc',
            },
            {
              id: 'bt3-t2-img-2',
              src: './assets/aistudio/Screenshot__49__b697d93a.png',
              caption: '-Prompt cải tiến:',
              alt: 'Ảnh chụp màn hình Prompt cải tiến giải thích khái niệm Vô điệu tính trong âm nhạc',
            },
            {
              id: 'bt3-t2-img-3',
              src: './assets/aistudio/Screenshot__53__e8d3572d.png',
              caption: '-Prompt nâng cao',
              alt: 'Ảnh chụp màn hình Prompt nâng cao giải thích khái niệm Vô điệu tính trong âm nhạc',
            },
          ],
          table: {
            headers: [
              'Tiêu chí',
              'Prompt cơ bản',
              'Prompt cải tiến',
              'Prompt nâng cao',
            ],
            rows: [
              {
                id: 't2-row-1',
                cells: [
                  '1. Nội dung prompt',
                  'Yêu cầu giải thích khái niệm “Vô điệu tính” trong âm nhạc',
                  'Đưa ra vai trò giảng viên Sư phạm Âm nhạc, xác định đối tượng là sinh viên đại học và yêu cầu giải thích bằng ví dụ thực tế, nêu ý nghĩa, tầm quan trọng và câu hỏi tư duy.',
                  'Xây dựng vai trò Giáo sư Lý luận Âm nhạc, xác định đối tượng là sinh viên Sư phạm Âm nhạc năm nhất, yêu cầu bài giảng theo 5 nội dung cụ thể, có giới hạn từ và định dạng rõ ràng.',
                ],
              },
              {
                id: 't2-row-2',
                cells: [
                  '2. Mức độ cụ thể',
                  'Thấp, yêu cầu còn chung chung.',
                  'Khá cụ thể, có định hướng về nội dung và cách truyền đạt.',
                  'Rất cụ thể, xác định rõ vai trò, đối tượng, cấu trúc, kiến thức chuyên sâu và yêu cầu trình bày.',
                ],
              },
              {
                id: 't2-row-3',
                cells: [
                  '3. Định hướng trả lời',
                  'Giải thích khái niệm và đưa ra đặc điểm cơ bản.',
                  'Giải thích theo hướng sư phạm, kết hợp ví dụ gần gũi và liên hệ thực tiễn.',
                  'Xây dựng bài giảng có hệ thống, kết hợp lý luận âm nhạc, lịch sử, kỹ thuật sáng tác và phương pháp giảng dạy.',
                ],
              },
              {
                id: 't2-row-4',
                cells: [
                  '4. Kết quả nhận được',
                  'Câu trả lời ngắn gọn, dễ hiểu, có định nghĩa, đặc điểm, đại diện tiêu biểu và ví dụ minh họa.',
                  'Câu trả lời sinh động hơn, giúp người học hình dung bản chất khái niệm, hiểu mục đích, vai trò và biết vận dụng tư duy phản biện',
                  'Câu trả lời chuyên sâu và có tính học thuật cao hơn, trình bày thành 5 phần rõ ràng, có hình ảnh minh họa, kiến thức lịch sử và gợi ý hoạt động dạy học.',
                ],
              },
              {
                id: 't2-row-5',
                cells: [
                  '5. Ưu điểm',
                  'Nhanh chóng, dễ sử dụng, phù hợp khi cần tìm hiểu kiến thức ban đầu.',
                  'Có tính tương tác, tăng khả năng liên hệ và ghi nhớ kiến thức',
                  'Nội dung toàn diện, có tính hệ thống, phù hợp với mục đích học tập và nghiên cứu chuyên ngành.',
                ],
              },
              {
                id: 't2-row-6',
                cells: [
                  '6. Hạn chế',
                  'Chưa xác định đối tượng học tập, chưa có chiều sâu và định hướng sư phạm cụ thể.',
                  'Chưa khai thác sâu nguồn gốc lịch sử, cơ chế kỹ thuật và quá trình phát triển của vô điệu tính.',
                  'Yêu cầu khá dài và phức tạp; một số nội dung chuyên môn vẫn cần được kiểm chứng bằng tài liệu âm nhạc học.',
                ],
              },
            ],
          },
        },
        {
          id: 'bt3-sec-3',
          heading:
            '3. Tác vụ 3: Tạo bộ câu hỏi ôn tập môn Lịch sử âm nhạc thế giới chủ đề các nhạc sĩ ở thời kỳ Cổ điển Viên',
          body: '',
          images: [
            {
              id: 'bt3-t3-img-1',
              src: './assets/aistudio/Screenshot__62__5292bc03.png',
              caption: '-Promt cơ bản:',
              alt: 'Ảnh chụp màn hình Prompt cơ bản tạo câu hỏi ôn tập môn Lịch sử âm nhạc thế giới thời kỳ Cổ điển Viên',
            },
            {
              id: 'bt3-t3-img-2',
              src: './assets/aistudio/Screenshot__68__2d765be2.png',
              caption: '-Prompt cải tiến:',
              alt: 'Ảnh chụp màn hình Prompt cải tiến tạo bộ câu hỏi ôn tập môn Lịch sử âm nhạc thế giới thời kỳ Cổ điển Viên',
            },
            {
              id: 'bt3-t3-img-3',
              src: './assets/aistudio/Screenshot__77__1fb22339.png',
              caption: '-Prompt nâng cao',
              alt: 'Ảnh chụp màn hình Prompt nâng cao tạo bộ câu hỏi ôn tập môn Lịch sử âm nhạc thế giới thời kỳ Cổ điển Viên',
            },
          ],
          table: {
            headers: [
              'Tiêu chí',
              'Prompt cơ bản',
              'Prompt cải tiến',
              'Prompt nâng cao',
            ],
            rows: [
              {
                id: 't3-row-1',
                cells: [
                  '1. Nội dung prompt',
                  'Yêu cầu tạo câu hỏi ôn tập về các nhạc sĩ thời kỳ Cổ điển Viên.',
                  'Đóng vai giảng viên Lịch sử Âm nhạc thế giới 1, yêu cầu 5 câu trắc nghiệm có 4 phương án, đáp án và giải thích; 3 câu tự luận vận dụng, phản biện',
                  'Xác định vai trò chuyên gia khảo thí giáo dục âm nhạc, yêu cầu thiết kế bộ câu hỏi toàn diện, có tính phân loại cao, phục vụ thi kết thúc học phần.',
                ],
              },
              {
                id: 't3-row-2',
                cells: [
                  '2. Mức độ yêu cầu',
                  'Yêu cầu chung, chưa có tiêu chí đánh giá cụ thể.',
                  'Quy định rõ số lượng, dạng câu hỏi và mức độ kiến thức.',
                  'Quy định chi tiết cấu trúc, nội dung chuyên môn, mức độ tư duy và hình thức trình bày.',
                ],
              },
              {
                id: 't3-row-3',
                cells: [
                  '3. Vai trò AI',
                  'Chưa xác định vai trò cụ thể.',
                  'Đóng vai giảng viên bộ môn.',
                  'Đóng vai chuyên gia khảo thí học thuật cấp cao và giảng viên Sư phạm Âm nhạc.',
                ],
              },
              {
                id: 't3-row-4',
                cells: [
                  '4. Mức độ yêu cầu',
                  'Yêu cầu chung, chưa có tiêu chí đánh giá cụ thể',
                  'Quy định rõ số lượng, dạng câu hỏi và mức độ kiến thức.',
                  'Quy định chi tiết cấu trúc, nội dung chuyên môn, mức độ tư duy và hình thức trình bày.',
                ],
              },
              {
                id: 't3-row-5',
                cells: [
                  '5.Nội dung kiến thức',
                  'Tập trung vào Haydn, Mozart, Beethoven và những đặc điểm chung.',
                  'Bổ sung kiến thức về phong cách sáng tác, đóng góp và vai trò lịch sử của ba nhạc sĩ',
                  'Đi sâu vào thể loại giao hưởng, tứ tấu dây, hình thức Sonata, phát triển chủ đề và tính kịch tính.',
                ],
              },
              {
                id: 't3-row-6',
                cells: [
                  '5. Dạng câu hỏi',
                  'Chủ yếu là câu hỏi nhận biết, thông hiểu, vận dụng.',
                  'Có câu hỏi trắc nghiệm và tự luận phân tích, phản biện.',
                  'Có câu hỏi trắc nghiệm phân loại cao và tự luận phát triển tư duy sư phạm.',
                ],
              },
              {
                id: 't3-row-7',
                cells: [
                  '6. Đáp án và giải thích',
                  'Chưa quy định cách trình bày đáp án',
                  'Yêu cầu đáp án đúng và giải thích ngắn gọn ngay dưới mỗi câu.',
                  'Yêu cầu ẩn đáp án trắc nghiệm trong thẻ thu gọn; tự luận chỉ có gợi ý chấm điểm, không cung cấp lời giải.',
                ],
              },
              {
                id: 't3-row-8',
                cells: [
                  '7. Tính sư phạm',
                  'Có đề cập đến việc ôn tập kiến thức cơ bản.',
                  'Bắt đầu gắn với chuyên ngành Sư phạm Âm nhạc.',
                  'Nhấn mạnh khả năng vận dụng kiến thức vào thiết kế tiết dạy, lựa chọn ngữ liệu trực quan và tổ chức hoạt động học tập.',
                ],
              },
              {
                id: 't3-row-9',
                cells: [
                  '8. Hình thức trình bày',
                  'Chia thành các nhóm câu hỏi và bảng hệ thống kiến thức',
                  'Chia thành hai phần trắc nghiệm và tự luận, có đáp án và giải thích.',
                  'Quy định cấu trúc Markdown, thuật ngữ chuyên ngành in đậm, đáp án và tiêu chí chấm điểm có thể thu gọn.',
                ],
              },
              {
                id: 't3-row-10',
                cells: [
                  '9. Kết quả nhận được',
                  'Tạo được bộ câu hỏi ôn tập gồm 26 câu, chia thành nhận biết, thông hiểu, vận dụng và nhóm câu hỏi trọng tâm.',
                  'Tạo được 5 câu trắc nghiệm có đáp án, giải thích và 3 câu tự luận vận dụng, phản biện',
                  'Tạo được 5 câu trắc nghiệm phân loại và 3 câu tự luận chuyên sâu, có đáp án ẩn, gợi ý chấm điểm và liên hệ sư phạm.',
                ],
              },
              {
                id: 't3-row-11',
                cells: [
                  '10. Ưu điểm',
                  'Bao quát kiến thức, dễ tiếp cận phù hợp để bắt đầu ôn tập',
                  'Cấu trúc rõ ràng, có sự kết hợp giữa kiểm tra kiến thức và phát triển tư duy.',
                  'Nội dung chuyên môn sâu hơn, câu hỏi có tính phân tích, đánh giá và vận dụng; hỗ trợ người học tự kiểm tra kiến thức.',
                ],
              },
              {
                id: 't3-row-12',
                cells: [
                  '11. Hạn chế',
                  'Số lượng câu hỏi khá nhiều nhưng chưa có đáp án cụ thể và chưa phân hóa rõ năng lực người học.',
                  'Câu hỏi vẫn thiên về kiến thức tổng quát, mức độ phân loại chuyên sâu chưa cao.',
                  'Yêu cầu prompt dài và phức tạp hơn; một số câu hỏi vẫn cần được giảng viên rà soát về độ chính xác chuyên môn và mức độ phù hợp với chương trình học.',
                ],
              },
            ],
          },
        },
        {
          id: 'bt3-sec-4',
          heading: '4. Lý do một số prompt hiệu quả hơn các prompt khác',
          body: 'Qua việc xây dựng và thử nghiệm các phiên bản prompt, có thể phân tích hiệu quả của câu lệnh dựa trên một số yếu tố:',
          bulletPoints: [
            'Thứ nhất, mục tiêu rõ ràng: Prompt nêu cụ thể nhiệm vụ cần thực hiện giúp AI xác định đúng trọng tâm, hạn chế câu trả lời lan man.',
            'Thứ hai, cung cấp đầy đủ bối cảnh: Khi xác định rõ người sử dụng là sinh viên ngành Sư phạm Âm nhạc, AI có cơ sở để lựa chọn cách diễn đạt và ví dụ gần với chuyên ngành hơn',
            'Thứ ba, yêu cầu có cấu trúc: Việc chia nhiệm vụ thành các đầu mục giúp câu trả lời logic, dễ theo dõi và thuận tiện cho việc sử dụng.',
            'Thứ tư, đưa ra ví dụ minh họa: Ví dụ cụ thể giúp AI hiểu rõ hơn mong muốn của người dùng, từ đó tạo ra nội dung sát yêu cầu.',
            'Thứ năm, xác định tiêu chí đầu ra: Những yêu cầu như độ dài, ngôn ngữ, số lượng câu hỏi và mức độ kiến thức giúp kết quả phù hợp với mục đích học tập.',
          ],
          closingNote:
            'Như vậy, một prompt hiệu quả không nhất thiết phải dài mà cần có mục tiêu, bối cảnh và yêu cầu rõ ràng.',
        },
        {
          id: 'bt3-sec-5',
          heading:
            '5. Nguyên tắc và mẹo tổng hợp viết prompt hiệu quả dựa trên kết quả thử nghiệm',
          body: 'Từ quá trình xây dựng và thử nghiệm, em có thể rút ra một số kinh nghiệm:',
          bulletPoints: [
            'Xác định rõ mục đích: Biết mình muốn AI thực hiện nhiệm vụ gì trước khi viết prompt.',
            'Cung cấp bối cảnh: Nêu rõ đối tượng, lĩnh vực và trình độ kiến thức.',
            'Sử dụng câu lệnh cụ thể: Tránh những yêu cầu chung chung, khó xác định kết quả.',
            'Chia nhiệm vụ thành từng bước: Giúp AI xử lý nội dung có trình tự và logic.',
            'Đưa ra ví dụ khi cần thiết: Giúp AI hiểu rõ định dạng và cách trình bày mong muốn.',
            'Kiểm tra lại thông tin: Đặc biệt với kiến thức chuyên ngành âm nhạc, cần đối chiếu với giáo trình và tài liệu đáng tin cậy.',
            'Điều chỉnh prompt: Nếu kết quả chưa phù hợp, cần bổ sung hoặc thay đổi yêu cầu thay vì sử dụng ngay câu trả lời đầu tiên.',
          ],
        },
        {
          id: 'bt3-sec-6',
          heading: '6. Rút ra bài học',
          body: 'Qua bài tập này, em nhận thấy kỹ năng viết prompt có vai trò quan trọng trong việc khai thác hiệu quả các công cụ trí tuệ nhân tạo phục vụ học tập. Việc thay đổi cách đặt câu lệnh từ đơn giản sang có cấu trúc và đầy đủ bối cảnh có thể giúp cải thiện mức độ phù hợp của kết quả.\n\nĐối với sinh viên ngành Sư phạm Âm nhạc, kỹ năng này có thể hỗ trợ việc tìm hiểu tài liệu, củng cố kiến thức nhạc lý và chuẩn bị nội dung giảng dạy. Tuy nhiên, AI chỉ nên được xem là công cụ hỗ trợ. Sinh viên vẫn cần chủ động tư duy, kiểm tra thông tin và vận dụng kiến thức của bản thân để bảo đảm chất lượng học tập của mình.',
        },
      ],
      gallery: [],
      resources: [
        {
          id: 'ch3-res-1',
          label: 'Phiếu tổng hợp Prompt thực hành Chương 3 (Drive / PDF mẫu)',
          type: 'drive',
          url: '',
          note: 'Dán liên kết tài liệu minh chứng Chương 3 tại mục Chỉnh sửa.',
        },
      ],
    },
    {
      id: 'bai-tap-4',
      number: 4,
      chapterLabel: 'Chương 4: Giao tiếp và hợp tác trong môi trường số',
      title: 'Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
      subtitle: '',
      shortDescription:
        'Thực hành phối hợp nhóm trên không gian làm việc trực tuyến: phân quyền tài liệu, theo dõi tiến độ, giao tiếp văn minh và tổng hợp minh chứng.',
      coverImage: ch4Collab,
      coverAlt: 'Bàn thảo luận nhóm với bảng phân công dự án workshop âm nhạc, máy tính bảng và bản nhạc',
      isSampleContent: false,
      sampleNotice: '',
      objectives: [
        'Thảo luận, xây dựng ý tưởng và thống nhất kế hoạch tổ chức Workshop âm nhạc cho trẻ em “Chạm vào giai điệu”.',
        'Điều phối cuộc họp nhóm trực tuyến với lịch trình rõ ràng và phân công nhiệm vụ cụ thể cho 5 thành viên.',
        'Đánh giá hiệu quả hợp tác nhóm và rút kinh nghiệm quản lý thời gian, chuẩn bị tài liệu.',
      ],
      sections: [
        {
          id: 'bt4-sec-1',
          heading: '1. Mục đích cuộc họp',
          body: 'Thảo luận, xây dựng ý tưởng và thống nhất kế hoạch tổ chức Workshop âm nhạc cho trẻ em với nội dung trải nghiệm nhạc cụ và cảm thụ âm nhạc.',
        },
        {
          id: 'bt4-sec-2',
          heading: '2. Thành phần tham gia',
          body: 'Cuộc họp gồm 5 thành viên trong nhóm CNS, do trưởng nhóm chủ trì và điều hành.',
        },
        {
          id: 'bt4-sec-3',
          heading: '3. Nội dung cuộc họp',
          body: '',
          table: {
            title: '',
            headers: ['Thời gian', 'Nội dung'],
            rows: [
              {
                id: 'bt4-c-1',
                cells: ['10 phút', 'Tuyên bố lý do, giới thiệu mục tiêu cuộc họp'],
              },
              {
                id: 'bt4-c-2',
                cells: ['10 phút', 'Thảo luận ý tưởng, chủ đề và đối tượng tham gia'],
              },
              {
                id: 'bt4-c-3',
                cells: ['15 phút', 'Xây dựng nội dung và hình thức tổ chức workshop'],
              },
              {
                id: 'bt4-c-4',
                cells: ['10 phút', 'Thảo luận kinh phí, địa điểm và phương tiện'],
              },
              {
                id: 'bt4-c-5',
                cells: ['10 phút', 'Phân công nhiệm vụ và thống nhất thời gian thực hiện'],
              },
            ],
          },
        },
        {
          id: 'bt4-sec-4',
          heading: '4. Phân công nhiệm vụ',
          body: '',
          table: {
            title: '',
            headers: ['Thành viên', 'Nhiệm vụ'],
            rows: [
              {
                id: 'bt4-m-1',
                cells: ['Hiền Hương', 'Chủ trì cuộc họp'],
              },
              {
                id: 'bt4-m-2',
                cells: ['Tú Linh', 'Xây dựng nội dung chuyên môn'],
              },
              {
                id: 'bt4-m-3',
                cells: ['Ngọc Linh', 'Phụ trách hậu cần, địa điểm và nhạc cụ'],
              },
              {
                id: 'bt4-m-4',
                cells: ['Trúc Linh', 'Phụ trách truyền thông'],
              },
              {
                id: 'bt4-m-5',
                cells: ['Văn Khiêm', 'Dự trù kinh phí, tổng hợp ý kiến'],
              },
            ],
          },
        },
        {
          id: 'bt4-sec-5',
          heading: '5. Kết quả dự kiến',
          body: 'Các thành viên thống nhất được ý tưởng, nội dung chính, phương án tổ chức và nhiệm vụ cụ thể. Sau cuộc họp, mỗi thành viên chủ động thực hiện phần việc được giao, phối hợp để hoàn thiện kế hoạch và chuẩn bị cho workshop.',
        },
        {
          id: 'bt4-sec-6',
          heading: '6. Đánh giá cuộc họp',
          body: 'Cuộc họp giúp trao đổi ý tưởng, phát huy tinh thần làm việc nhóm và xác định rõ định hướng dự án. Tuy nhiên, cần quản lý thời gian thảo luận tốt hơn, có sự chuẩn bị trước về tài liệu và chốt thời hạn hoàn thành từng nhiệm vụ để nâng cao hiệu quả triển khai.',
        },
      ],
      gallery: [
        {
          id: 'bt4-minutes-1',
          src: './assets/aistudio/Screenshot_2026-11-15_105151_cad0ec22.png',
          caption: 'Trang 1/2: Thành phần tham dự, định hướng hoạt động & ý kiến đóng góp',
          alt: 'Biên bản cuộc họp triển khai kế hoạch tổ chức Workshop âm nhạc cho trẻ em - Trang 1',
        },
        {
          id: 'bt4-minutes-2',
          src: './assets/aistudio/Screenshot_2026-11-15_105214_ccc2befa.png',
          caption: 'Trang 2/2: Kết luận, thống nhất, đánh giá & chữ ký xác nhận',
          alt: 'Biên bản cuộc họp triển khai kế hoạch tổ chức Workshop âm nhạc cho trẻ em - Trang 2',
        },
      ],
      memberReviews: [
        {
          id: 'mr-hien-huong',
          name: 'Hiền Hương',
          strengths:
            'Cuộc họp đi đúng trọng tâm, thống nhất được khung chương trình chính và mục tiêu cốt lõi của workshop mà không bị lan man.',
          limitations:
            'Phần chuyển tiếp giữa các nội dung chuyên môn và giao lưu khán giả bàn chưa tới, còn chung chung. Buổi sau cần chốt kịch bản chi tiết hơn để tránh chết sân khấu hoặc lố giờ.',
        },
        {
          id: 'mr-ngoc-linh',
          name: 'Ngọc Linh',
          strengths:
            'Mọi người nắm bắt thông tin nhanh, chốt được thông điệp truyền thông và thời điểm mở đơn đăng ký rõ ràng để team content bắt tay vào làm luôn.',
          limitations:
            'Mình thấy cuộc họp đang hơi nặng về phần chuyên môn mà chưa dành đủ thời gian bàn sâu về kế hoạch kéo tương tác và tìm kiếm khán giả mục tiêu.',
        },
        {
          id: 'mr-tu-linh',
          name: 'Tú Linh',
          strengths:
            'Thời gian họp được kiểm soát tốt, các đầu việc lớn đã có người chịu trách nhiệm cụ thể.',
          limitations:
            'Phần dự trù ngân sách bàn quá vội ở cuối giờ. Nhiều hạng mục phát sinh về đạo cụ và in ấn chưa có báo giá thực tế, rất dễ bị hụt tiền khi triển khai.',
        },
        {
          id: 'mr-truc-linh',
          name: 'Trúc Linh',
          strengths:
            'Phân chia công việc rõ ràng, không bị chồng chéo giữa các mảng nên dễ theo dõi tiến độ.',
          limitations:
            'Các đầu việc hậu cần được giao hơi gấp, một số khâu chuẩn bị chưa có deadline cụ thể để kiểm soát rủi ro trước ngày diễn ra sự kiện.',
        },
        {
          id: 'mr-van-khiem',
          name: 'Văn Khiêm',
          strengths:
            'Chốt nhanh được phương án set-up không gian và danh sách thiết bị âm thanh cơ bản.',
          limitations:
            'Chưa thống nhất kỹ phương án dự phòng (backup) nếu thiết bị gặp trục trặc hoặc địa điểm có thay đổi về mặt bằng, cần bổ sung gấp vào biên bản họp.',
        },
      ],
      lessonsLearned:
        'Qua cuộc họp, nhóm nhận thấy để làm việc chung hiệu quả thì mỗi thành viên cần có sự chuẩn bị trước, chủ động đóng góp ý kiến và có trách nhiệm với nhiệm vụ của mình. Người chủ trì cũng cần biết cách dẫn dắt cuộc họp, phân chia thời gian hợp lý và tạo cơ hội để mọi người cùng tham gia thảo luận. Bên cạnh đó, việc lắng nghe, tôn trọng ý kiến khác nhau và cùng tìm ra tiếng nói chung là rất quan trọng. Đây cũng là kinh nghiệm giúp nhóm phối hợp tốt hơn, tránh tình trạng chồng chéo công việc và chủ động hơn trong quá trình thực hiện dự án sau này.',
      evidenceImages: [
        {
          id: 'bt4-ev-1',
          src: './assets/aistudio/Screenshot_2026-11-14_220402_ef9be6b1.png',
          caption:
            'Minh chứng 1: Trao đổi thống nhất lịch họp, nội dung thảo luận và phân công vai trò trong nhóm Zalo',
          alt: 'Ảnh chụp màn hình trao đổi phân công vai trò và lịch họp trên Zalo Nhóm 5-nhập môn cns',
        },
        {
          id: 'bt4-ev-2',
          src: './assets/aistudio/Screenshot_2026-11-14_220632_9da337f5.png',
          caption:
            'Minh chứng 2: Phiên họp trực tuyến trên nền tảng Zoom Workplace với đầy đủ 5 thành viên tham gia',
          alt: 'Ảnh chụp màn hình cuộc họp trực tuyến trên Zoom Workplace của 5 thành viên nhóm CNS',
        },
      ],
      resources: [
        {
          id: 'ch4-res-1',
          label: 'Thư mục dự án nhóm trên Google Drive (Chưa gắn link thực tế)',
          type: 'drive',
          url: '',
          note: 'Mở trình chỉnh sửa để dán đường dẫn Google Drive nhóm của bạn.',
        },
      ],
    },
    {
      id: 'bai-tap-5',
      number: 5,
      chapterLabel: 'Chương 5: Sáng tạo nội dung số',
      title: 'Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
      subtitle: '',
      shortDescription:
        'Thực hành xây dựng kịch bản, thiết kế hình ảnh/âm thanh minh họa và biên tập sản phẩm video số chia sẻ trên YouTube.',
      coverImage: ch5Creative,
      coverAlt: 'Góc sáng tạo nội dung âm nhạc với micro thu âm, đàn phím, ống kính máy ảnh và laptop dựng video',
      isSampleContent: true,
      sampleNotice:
        'Nội dung mẫu có thể chỉnh sửa (chưa có tệp BT NMCNS.docx đính kèm). Dán trực tiếp đường link YouTube trong BT NMCNS.docx vào mục "Chỉnh sửa nội dung" để trình phát video hiển thị ngay trên trang.',
      objectives: [
        'Biết quy trình lên ý tưởng, viết kịch bản và biên tập nội dung đa phương tiện (hình ảnh, âm thanh, video).',
        'Sử dụng AI tạo sinh ở vai trò công cụ hỗ trợ gợi ý kịch bản và minh họa, kết hợp dấu ấn cá nhân.',
        'Xuất bản sản phẩm video lên nền tảng YouTube và nhúng trình phát chuẩn vào Portfolio.',
      ],
      sections: [],
      gallery: [],
      youtubeUrl: 'https://youtu.be/E42fSLc5czM?si=xavNogkoWHmaQMUd',
      youtubeCaption: 'Video AI: “Ứng dụng công nghệ số và AI trong dạy học âm nhạc ở trường tiểu học”',
      resources: [
        {
          id: 'ch5-res-1',
          label: 'Kịch bản hoặc Slide thuyết trình đính kèm (Drive / PDF mẫu)',
          type: 'pdf',
          url: '',
          note: 'Có thể gắn link Google Drive chứa file PDF kịch bản hoặc video gốc.',
        },
      ],
    },
    {
      id: 'bai-tap-6',
      number: 6,
      chapterLabel: 'Chương 6: An toàn và liêm chính học thuật trong môi trường số',
      title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
      subtitle: 'Dựa trên các bài tập thực hành đã trải qua, em tự rút ra 5 bộ nguyên tắc cốt lõi khi sử dụng AI như sau:',
      shortDescription:
        'Đúc kết bộ quy tắc sử dụng AI minh bạch, tôn trọng bản quyền âm nhạc – học liệu và bảo mật thông tin trong môi trường sư phạm.',
      coverImage: ch6Ethics,
      coverAlt: 'Bút máy, âm thoa đồng và sổ tay nguyên tắc nghề nghiệp trên giấy kem ấm',
      isSampleContent: false,
      sampleNotice: '',
      objectives: [
        'Nhận diện các rủi ro đạo văn, sai lệch thông tin (ảo giác AI) và vi phạm bản quyền trong sáng tạo số.',
        'Thực hành trích dẫn minh bạch khi có sự hỗ trợ từ công cụ trí tuệ nhân tạo.',
        'Hình thành bộ nguyên tắc nghề nghiệp cho người giáo viên Sư phạm Âm nhạc trong kỷ nguyên số.',
      ],
      sections: [
        {
          id: 'ch6-sec1',
          heading: '1. Tư duy nền tảng: Hiểu đúng về AI',
          body: '',
          bulletPoints: [
            'Công cụ hỗ trợ, không phải “người làm hộ”: AI giúp giải đáp kiến thức khó và tiết kiệm thời gian, nhưng tư duy và năng lực cốt lõi là thứ chúng ta phải tự rèn luyện.',
            'Luôn đề cao tính hoài nghi khoa học: AI vẫn có thể mắc lỗi, nhầm lẫn hoặc tạo dữ liệu giả. Kiểm chứng thông tin luôn là bước bắt buộc.',
            'Đồng hành chứ không lệ thuộc: AI gợi ý – chúng ta hoàn thiện. AI định hướng – chúng ta tự học. Kết quả cuối cùng luôn đến từ nỗ lực thực chất của chúng ta.',
          ],
        },
        {
          id: 'ch6-sec2',
          heading: '2. Chiến lược sử dụng AI trong học tập',
          body: '',
          bulletPoints: [
            'Đúng mục đích, đúng thời điểm: Tập trung dùng AI để nghiên cứu, luyện tập kỹ năng và sáng tạo sản phẩm học tập. Tuyệt đối không dùng cho mục đích gian lận trong kiểm tra, thi cử.',
            'Chọn đúng “vũ khí” công nghệ: Khai thác linh hoạt các nền tảng chính thống (như Gemini, ChatGPT, Copilot, Canva, Perplexity...) tùy theo nhu cầu thực tế của từng nhiệm vụ.',
            'Xác thực đa chiều: Đối chiếu kết quả từ AI với sách giáo khoa, tài liệu học thuật hoặc hỏi trực tiếp giảng viên/giáo viên để đảm bảo độ chính xác.',
          ],
        },
        {
          id: 'ch6-sec3',
          heading: '3. Đạo đức & trung thực học đường',
          body: '',
          bulletPoints: [
            'Nói không với “Copy - Paste” vô điều kiện: Không sao chép nguyên văn sản phẩm của AI. Hãy tinh chỉnh, chắt lọc và diễn đạt lại bằng văn phong của chính mình.',
            'Minh bạch và tôn trọng bản quyền: Chủ động ghi chú rõ ràng nếu sử dụng phần lớn sự hỗ trợ từ AI trong các bài nghiên cứu hoặc dự án học tập.',
            'Giữ gìn sự liêm chính: Từ chối mọi hình thức dùng AI để làm giả sản phẩm hay qua mặt quy chế học tập. Trung thực là nền tảng của sự tiến bộ thực sự.',
          ],
        },
        {
          id: 'ch6-sec4',
          heading: '4. An toàn và bảo mật dữ liệu',
          body: '',
          bulletPoints: [
            'Bảo vệ thông tin cá nhân: Tuyệt đối không cung cấp dữ liệu nhạy cảm (CCCD, tài khoản ngân hàng, số điện thoại, địa chỉ nhà) vào các nền tảng AI công cộng.',
            'Kiểm soát nội dung chia sẻ: Cẩn trọng khi đăng tải các sản phẩm có sự hỗ trợ của AI, tránh làm lộ thông tin riêng tư hoặc tài liệu nội bộ của nhà trường.',
            'Không tiếp tay cho thông tin sai lệch: Sử dụng khả năng sáng tạo của AI một cách tỉnh táo; không tạo ra hoặc lan truyền các nội dung độc hại, sai sự thật.',
          ],
        },
        {
          id: 'ch6-sec5',
          heading: '5. Ứng xử văn minh & phát triển bền vững',
          body: '',
          bulletPoints: [
            'Khám phá và sáng tạo có trách nhiệm: Tận dụng AI để mở rộng tư duy, thử nghiệm các ý tưởng mới trong học tập và nghệ thuật.',
            'Lan tỏa giá trị tích cực: Chia sẻ kinh nghiệm sử dụng AI an toàn, hiệu quả để cùng bạn bè tiến bộ.',
            'Cầu thị và sẵn sàng sửa đổi: Xem những lần dùng AI sai cách là bài học để điều chỉnh nhanh chóng và trưởng thành hơn mỗi ngày.',
          ],
        },
      ],
      gallery: [],
      resources: [
        {
          id: 'ch6-res-1',
          label: 'Bản cam kết & Bộ quy tắc sử dụng AI (PDF / Drive mẫu)',
          type: 'pdf',
          url: '',
          note: 'Dán liên kết tài liệu Bài tập 6 nếu có file đính kèm.',
        },
      ],
    },
  ],
  summary: {
    title: 'Tổng kết học phần Nhập môn Công nghệ số',
    subtitle: 'Nhìn lại hành trình học tập, rèn luyện kỹ năng số và định hướng vận dụng vào Sư phạm Âm nhạc',
    isSampleContent: false,
    sampleNotice: '',
    overviewParagraph:
      'Khởi đầu học phần Nhập môn Công nghệ số, thú thật là em từng nghĩ công nghệ thông tin chỉ gói gọn trong các phần mềm văn phòng khô khan, ít liên quan đến một đứa chuyên ngành nghệ thuật như Sư phạm Âm nhạc. Thế nhưng, qua quá trình từng bước thực hiện và hoàn thiện bộ Portfolio này, góc nhìn của em đã thay đổi hoàn toàn. Việc hệ thống hóa lại từ những thao tác tệp tin nhỏ nhất, tìm kiếm tài liệu âm nhạc học, tối ưu hóa câu lệnh AI cho đến quản lý các dự án dàn dựng nghệ thuật nhóm đã mang lại cho em một trải nghiệm học tập hoàn toàn khác. Trước đây nếu như em sử dụng chat gpt và gemine với những prompt đơn giản không mấy hiệu quả, thì giờ đây em đã biết viết prompt hiệu quả hơn để nhận được kết quả tốt nhất. Portfolio không đơn thuần là một cuốn báo cáo nộp bài kết thúc môn, mà nó giống như một "nhật ký số" ghi lại hành trình em tự rèn luyện, chuyển hóa từ một người dùng công nghệ thụ động sang biết cách sử dụng công nghệ hiểu quả hơn, tiết kiệm thời gian hơn để phục vụ cho chuyên môn âm nhạc của mình.',
    takeawaysIntro:
      'Xuyên suốt học phần, em đã tích lũy được bộ kỹ năng số hỗ trợ đắc lực cho cả việc học hiện tại lẫn công việc giảng dạy sau này:',
    keyTakeaways: [
      {
        heading: 'Kỹ năng quản lý và tổ chức dữ liệu số',
        detail:
          'Biết cách xây dựng cấu trúc thư mục khoa học, quy tắc đặt tên tệp chuẩn hóa để lưu trữ gọn gàng hàng loạt tư liệu ký âm, file bản nhạc, tài nguyên âm thanh và giáo án.',
      },
      {
        heading: 'Năng lực nghiên cứu và tư duy phản biện',
        detail:
          'Nắm vững cách sử dụng các công cụ tìm kiếm nâng cao trên không gian mạng, biết cách đánh giá và sàng lọc 16 nguồn tài liệu học thuật theo chuẩn trích dẫn Harvard phục vụ cho các bài tiểu luận chuyên ngành.',
      },
      {
        heading: 'Kỹ năng làm chủ AI tạo sinh có trách nhiệm',
        detail:
          'Biết cách viết Prompt có cấu trúc (bổ sung bối cảnh, vai trò, giới hạn) để khai thác AI hỗ trợ lên ý tưởng kịch bản, thiết kế trò chơi âm nhạc tương tác (như "Nhà ga âm nhạc") nhưng luôn giữ vững lập trường, ý tưởng ban đầu của bản thân.',
      },
      {
        heading: 'Kỹ năng hợp tác và quản lý dự án trực tuyến',
        detail:
          'Sử dụng thành thạo các công cụ số để phân chia đầu việc, quản lý tiến độ cho các nhóm dự án quy mô nhỏ (như dàn dựng tiết mục múa, tổ chức workshop âm nhạc).',
      },
    ],
    favoriteHighlight:
      'Điều khiến em cảm thấy tâm đắc nhất khi xây dựng Portfolio này chính là việc tìm ra điểm chạm giữa Công nghệ số và Sư phạm Âm nhạc. Thay vì làm những bài tập lý thuyết khuôn mẫu, em đã biết cách lồng ghép công nghệ vào các sản phẩm thực tế của ngành mình- như việc dùng AI hỗ trợ viết kịch bản, thiết kế học liệu trực quan, tổng hợp tài liệu nghiên cứu hay ứng dụng công cụ AI vào xây dựng giáo án, xây dựng một tiết học âm nhạc thú vị. Qua đó, em thấy công nghệ thực sự là một "trợ lý" đắc lực giúp em hoàn thành sản phẩm học tập hiệu quả, tích kiệm thời gian.',
    challengesFaced:
      'Thách thức lớn nhất đối với em là việc cân bằng giữa tư duy nghệ thuật và tư duy logic của công nghệ. Giai đoạn đầu, khi xử lý các chuỗi tìm kiếm học thuật nâng cao hoặc tối ưu hóa prompt để AI không bị "lạc đề" chuyên môn, em gặp không ít lúng túng. Bên cạnh đó, việc sắp xếp khối lượng lớn các sản phẩm từ hình ảnh, tài liệu đến dự án nhóm sao cho bố cục Portfolio gọn gàng, logic, không bị rối mắt cũng đòi hỏi rất nhiều thời gian chắt lọc. Tuy nhiên, vượt qua những thử thách đó chính là lúc em rèn luyện được tính cẩn thận và tư duy số bài bản hơn.',
    futureCommitment:
      'Điều khiến em cảm thấy tâm đắc nhất khi xây dựng Portfolio này chính là việc tìm ra điểm chạm giữa Công nghệ số và Sư phạm Âm nhạc.',
  },
};
