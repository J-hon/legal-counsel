@section('body')

<tr>
    <td valign="top" style="padding-bottom:5px;padding-left:40px;padding-right:30px;" class="mainTitle">
        <!-- Main Title Text // -->
        <h2 class="text" style="color:#000000; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:28px; font-weight:500; font-style:normal; letter-spacing:normal; line-height:36px; text-transform:none; padding:0; margin:0;">
            Hello {{ ucfirst($client->first_name) }},
        </h2>
    </td>
</tr>

<tr>
    <td>
        <div class="text" style="color:#333333; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:12px; font-weight:500; font-style:normal; letter-spacing:normal; line-height:24px; text-transform:none; padding:0; margin: 40px; text-align: justify;">
            <p style="font-family: inherit; font-size: 16px">
                You're now a client with Law Firm X.
            </p>
        </div>
    </td>
</tr>

@endsection
